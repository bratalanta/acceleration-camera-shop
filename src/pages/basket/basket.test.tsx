import { screen } from '@testing-library/react';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import Basket from './basket';

describe('Component: Basket', () => {
  it('should render correctly', () => {
    renderTestApp(<Basket />, {});

    expect(screen.getByTestId('basket-page')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
