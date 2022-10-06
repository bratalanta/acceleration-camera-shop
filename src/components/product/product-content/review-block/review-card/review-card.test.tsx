import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../../../tests/helpers/render-test-app';
import { makeFakeReview } from '../../../../../tests/mocks/mocks';
import ReviewCard from './review-card';

const mockReview = makeFakeReview();

describe('Component: ReviewCard', () => {
  it('should render correctly', () => {
    renderTestApp(<ReviewCard review={mockReview}/>, {});

    expect(screen.getByTestId('review-card')).toBeInTheDocument();
    expect(screen.getByText(mockReview.review)).toBeInTheDocument();
    expect(screen.getByText(mockReview.disadvantage)).toBeInTheDocument();
  });
});
