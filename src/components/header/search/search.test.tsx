import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import Search from './search';

describe('Component: Search', () => {
  it('should render correctly', () => {
    renderTestApp(<Search />, {});

    expect(screen.getByTestId('search')).toBeInTheDocument();
  });

  it('should reset search input', async () => {
    renderTestApp(<Search />, {});

    await userEvent.click(screen.getByTestId('reset'));
    expect(screen.getByTestId('search-input')).toHaveValue('');
  });

  it('should display camera name in input', async () => {
    renderTestApp(<Search />, {});

    await userEvent.type(screen.getByTestId('search-input'), 'c');
    expect(screen.getByTestId('search-input')).toHaveValue('c');
  });
});
