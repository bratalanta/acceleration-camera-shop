import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import CatalogBreadcrumbLink from './catalog-breadcrumb-link';

describe('Component: CatalogBreadcrumbLink', () => {
  it('should render correctly', () => {
    renderTestApp(<CatalogBreadcrumbLink />, {});

    expect(screen.getByText('Каталог')).toBeInTheDocument();
  });
});
