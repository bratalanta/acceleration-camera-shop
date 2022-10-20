import { screen } from '@testing-library/react';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import Product from './product';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import { createAPI } from '../../services/api';
import { NameSpace } from '../../const';
import { makeFakeCamera, makeFakeReview } from '../../tests/mocks/mocks';
import 'react-intersection-observer/test-utils';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  [NameSpace.Cameras]: {
    camera: makeFakeCamera(),
    similarCameras: [makeFakeCamera()],
    likelyCameras: [makeFakeCamera()],
  },
  [NameSpace.App]: {
    currentCatalogPath: {
      currentPage: 1
    },
    currentReviewPage: 2,
    activeModal: null
  },
  [NameSpace.Reviews]: {
    reviewsTotalCount: 5,
    reviews: [makeFakeReview()]
  }
});

describe('Component: Product', () => {
  it('should render correctly', () => {
    renderTestApp(<Product />, {
      mockStore: store
    });

    expect(screen.getByTestId('product')).toBeInTheDocument();
  });
});
