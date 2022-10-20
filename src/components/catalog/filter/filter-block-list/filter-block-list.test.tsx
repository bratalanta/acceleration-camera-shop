import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../../tests/helpers/render-test-app';
import FilterBlockList from './filter-block-list';

describe('Component: FilterBlockList', () => {
  it('should render correctly', () => {
    renderTestApp(<FilterBlockList />, {});

    expect(screen.getAllByTestId('checkbox-block')[0]).toBeInTheDocument();
    expect(screen.getByTestId('price-filter')).toBeInTheDocument();
  });
});
