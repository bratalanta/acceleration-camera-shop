import { screen } from '@testing-library/react';
import { generatePath } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE, LoadingStatus, NameSpace } from '../../const';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../tests/mocks/mocks';
import 'react-intersection-observer/test-utils';
import AppRouter from '../../router/app-router';

const mockCamera = makeFakeCamera();
const mockCameras = [makeFakeCamera(), mockCamera];
const mockSimilarCameras = [makeFakeCamera(), mockCamera];
const mockCamerasTotalCount = 15;

const mockState = {
  [NameSpace.Cameras]: {
    cameras: mockCameras,
    camera: mockCamera,
    camerasTotalCount: mockCamerasTotalCount,
    similarCameras: mockSimilarCameras,
    camerasLoadingStatus: LoadingStatus.Fulfilled,
    cameraLoadingStatus: LoadingStatus.Fulfilled,
  }
};

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
    });

    const product = await screen.findByText(/Похожие товары/i);

    expect(product).toBeInTheDocument();
  });
});
