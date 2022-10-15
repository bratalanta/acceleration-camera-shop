
import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import Filter from './filter';

// const changeParameter = jest.fn();
// changeSearch={(parameter) => changeParameter(parameter)}
describe('Component: Filter', () => {
  it('should render correctly', () => {
    renderTestApp(<Filter />, {});

    expect(screen.getByTestId('filter')).toBeInTheDocument();
  });
});
