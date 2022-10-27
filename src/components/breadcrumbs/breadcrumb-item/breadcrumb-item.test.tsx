import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import BreadcrumbItem from './breadcrumb-item';

describe('Component: BreadcrumbItem', () => {
  it('should render correctly', () => {
    renderTestApp(<BreadcrumbItem name="name"/>, {});

    expect(screen.getByText('name')).toBeInTheDocument();
  });
});
