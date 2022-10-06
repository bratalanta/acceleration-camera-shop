import { screen } from '@testing-library/react';
import { MAX_RATING } from '../../const';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import RatingStars from './rating-stars';

describe('Component: RatingStars', () => {
  it('should render correctly', () => {
    renderTestApp(<RatingStars rating={MAX_RATING}/>, {});

    expect(screen.getAllByTestId('stars')).toHaveLength(MAX_RATING);
  });
});
