import { screen } from '@testing-library/react';
import { generatePath } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE, LoadingStatus, NameSpace } from '../../const';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import { makeFakeCamera, makeFakeReview } from '../../tests/mocks/mocks';
import 'react-intersection-observer/test-utils';
import AppRouter from '../../router/app-router';
import { createAPI } from '../../services/api';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';

const mockCamera = makeFakeCamera();
const mockCameras = [makeFakeCamera(), makeFakeCamera()];
const mockLikelyCameras = [makeFakeCamera(), makeFakeCamera()];
const mockSimilarCameras = [makeFakeCamera(), makeFakeCamera()];
const mockCamerasTotalCount = 15;

const mockState = {
  [NameSpace.Cameras]: {
    cameras: mockCameras,
    camera: mockCamera,
    camerasTotalCount: mockCamerasTotalCount,
    similarCameras: mockSimilarCameras,
    camerasLoadingStatus: LoadingStatus.Fulfilled,
    cameraLoadingStatus: LoadingStatus.Fulfilled,
    likelyCameras: mockLikelyCameras,
    camerasPriceRange: {
      minPrice: 0,
      maxPrice: 0
    }
  },
  [NameSpace.App]: {
    currentCatalogPath: {
      currentPage: 1
    },
    productActiveModal: {
      activeModal: null
    }
  }
};

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  [NameSpace.Cameras]: {
    camera: makeFakeCamera(),
    similarCameras: [makeFakeCamera()],
    likelyCameras: mockLikelyCameras
  },
  [NameSpace.App]: {
    currentCatalogPath: {
      currentPage: 1
    },
    currentReviewPage: 2,
    productActiveModal: {
      activeModal: null
    }
  },
  [NameSpace.Reviews]: {
    reviewsTotalCount: 5,
    reviews: [makeFakeReview()]
  },
  [NameSpace.Basket]: {
    basketProducts: [{
      product: makeFakeCamera(),
      productCount: 1
    }]
  }
});

describe('Application routing', () => {
  it('should render "Catalog" when user is navigated to "/catalog/page_:pageNumber"', () => {
    renderTestApp(<AppRouter />, {
      initialRoute: generatePath(AppRoute.Catalog, { pageNumber: DEFAULT_PAGE}),
      initialState: mockState
    });

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });

  it('should render "NotFound" when user is navigated to non-existent route', () => {
    renderTestApp(<AppRouter />, {
      initialRoute: '/non-existent-route',
      initialState: mockState
    });

    expect(screen.getByText(/Вернуться в каталог/i)).toBeInTheDocument();
  });

  it('should render "Product" when user is navigated to "/product/:id"', async() => {
    renderTestApp(<AppRouter />, {
      initialRoute: generatePath(AppRoute.Product, {id: String(mockCamera.id)}),
      mockStore: store
    });

    expect(screen.getByText(/Похожие товары/i)).toBeInTheDocument();
  });
});
