import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../../../tests/helpers/render-test-app';
import { makeFakeReview } from '../../../../../tests/mocks/mocks';
import ReviewCardList from './review-card-list';

const mockReview = makeFakeReview();

describe('Component: Header', () => {
  it('should render correctly', () => {
    renderTestApp(<ReviewCardList review={mockReview}/>, {});

    expect(screen.getByTestId('review-card')).toBeInTheDocument();
    expect(screen.getByText(mockReview.review)).toBeInTheDocument();
    expect(screen.getByText(mockReview.disadvantage)).toBeInTheDocument();
  });
});
