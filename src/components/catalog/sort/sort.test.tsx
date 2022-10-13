import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import Sort from './sort';

const changeParameter = jest.fn();

describe('Component: Sort', () => {
  it('should render correctly', () => {
    renderTestApp(<Sort changeSearch={(parameter) => changeParameter(parameter)}/>, {});

    expect(screen.getByTestId('sort')).toBeInTheDocument();
  });
});
