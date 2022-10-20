import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../../../../tests/helpers/render-test-app';
import PriceFilter from './price-filter';

describe('Component: PriceFilter', () => {
  it('should render correctly', () => {
    renderTestApp(<PriceFilter />, {});

    expect(screen.getByTestId('price-filter')).toBeInTheDocument();
  });

  it('should display digits in minimal price input', async () => {
    renderTestApp(<PriceFilter />, {});

    await userEvent.type(screen.getByTestId('input-min'), '12');

    expect(screen.getByTestId('input-min')).toHaveValue(12);
  });

  it('should not display negative number in minimal price input', async () => {
    renderTestApp(<PriceFilter />, {});

    await userEvent.type(screen.getByTestId('input-min'), '-1');

    expect(screen.getByTestId('input-min')).toHaveValue(null);
  });

  it('should not display negative number in maximum price input', async () => {
    renderTestApp(<PriceFilter />, {});

    await userEvent.type(screen.getByTestId('input-max'), '-1');

    expect(screen.getByTestId('input-max')).toHaveValue(null);
  });

  it('should display digits in maximum price input', async () => {
    renderTestApp(<PriceFilter />, {});

    await userEvent.type(screen.getByTestId('input-max'), '1123');

    expect(screen.getByTestId('input-max')).toHaveValue(1123);
  });
});
