import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import NoCameras from './no-cameras';

describe('Component: NoCameras', () => {
  it('should render correctly', () => {
    renderTestApp(<NoCameras />, {});

    expect(screen.getByText('По вашему запросу ничего не найдено')).toBeInTheDocument();
  });
});
