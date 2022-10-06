import { screen } from '@testing-library/react';
import { NameSpace } from '../../../../../const';
import { renderTestApp } from '../../../../../tests/helpers/render-test-app';
import { makeFakeReview } from '../../../../../tests/mocks/mocks';
import ReviewCardList from './review-card-list';

const mockReviews = [makeFakeReview(), makeFakeReview(), makeFakeReview()];

const mockState = {
  [NameSpace.Reviews]: {
    reviews: mockReviews
  }
};

describe('Component: ReviewCardList', () => {
  it('should render correctly', () => {
    renderTestApp(<ReviewCardList />, {
      initialState: mockState
    });

    expect(screen.getAllByTestId('review-card')).toHaveLength(mockReviews.length);
  });
});
