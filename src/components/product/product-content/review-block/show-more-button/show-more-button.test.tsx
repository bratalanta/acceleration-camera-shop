import { screen } from '@testing-library/react';
import { LoadingStatus, NameSpace } from '../../../../../const';
import { renderTestApp } from '../../../../../tests/helpers/render-test-app';
import { makeFakeReview } from '../../../../../tests/mocks/mocks';
import ShowMoreButton from './show-more-button';

const mockReviews = [makeFakeReview(), makeFakeReview(), makeFakeReview()];

const mockStateFulfilled = {
  [NameSpace.Reviews]: {
    reviews: mockReviews,
    reviewsLoadingStatus: LoadingStatus.Fulfilled
  }
};

const mockStatePending = {
  [NameSpace.Reviews]: {
    reviews: mockReviews,
    reviewsLoadingStatus: LoadingStatus.Pending
  }
};

const showMoreReviews = jest.fn();

describe('Component: ShowMoreButton', () => {
  it('should render correctly', () => {
    renderTestApp(<ShowMoreButton productId={1}/>, {
      initialState: mockStateFulfilled
    });

    expect(screen.getByTestId('show-btn')).toBeInTheDocument();
  });

  it('should not render', () => {
    renderTestApp(<ShowMoreButton productId={1}/>, {
      initialState: mockStatePending
    });

    expect(screen.getByTestId('show-btn')).toHaveAttribute('disabled');
  });

  it('should invoke handler when user clicks on button', () => {
    renderTestApp(<ShowMoreButton productId={1}/>, {
      initialState: mockStatePending
    });

    showMoreReviews();
    expect(showMoreReviews).toBeCalledTimes(1);
  });
});
