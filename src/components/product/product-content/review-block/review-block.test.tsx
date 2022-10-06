import { screen } from '@testing-library/react';
import { NameSpace } from '../../../../const';
import { renderTestApp } from '../../../../tests/helpers/render-test-app';
import { makeFakeReview } from '../../../../tests/mocks/mocks';
import ReviewBlock from './review-block';
import 'react-intersection-observer/test-utils';

const mockReviews = [makeFakeReview(), makeFakeReview(), makeFakeReview()];

const mockState = {
  [NameSpace.Reviews]: {
    reviews: mockReviews,
    reviewsTotalCount: 10
  }
};

describe('Component: ReviewBlock', () => {
  it('should render correctly', () => {
    renderTestApp(<ReviewBlock />, {
      initialState: mockState
    });

    expect(screen.getAllByTestId('review-card')).toHaveLength(mockReviews.length);
    expect(screen.getByTestId('block')).toBeInTheDocument();
    expect(screen.getByTestId('intersect')).toBeInTheDocument();
    expect(screen.getByTestId('open-modal-btn')).toBeInTheDocument();
  });
});
