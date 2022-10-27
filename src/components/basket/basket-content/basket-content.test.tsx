import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import BasketContent from './basket-content';

describe('Component: BasketContent', () => {
  it('should render correctly', () => {
    renderTestApp(<BasketContent/>, {});

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.getByTestId('basket')).toBeInTheDocument();
    expect(screen.getByTestId('summary')).toBeInTheDocument();
  });
});
