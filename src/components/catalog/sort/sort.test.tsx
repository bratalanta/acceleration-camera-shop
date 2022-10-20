import { screen } from '@testing-library/react';
import { NameSpace } from '../../../const';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import Sort from './sort';

describe('Component: Sort', () => {
  it('should render correctly', () => {
    renderTestApp(<Sort />, {});

    expect(screen.getByTestId('sort')).toBeInTheDocument();
  });

  it('should check price sort', async () => {
    renderTestApp(<Sort />, {
      initialState: {
        [NameSpace.App]: {
          currentCatalogPath: {
            currentPage: 1,
            search: '?_sort=price'
          }
        }
      }
    });
    expect(screen.getByTestId('sort-price')).toBeChecked();
  });

  it('should check asc sort', async () => {
    renderTestApp(<Sort />, {
      initialState: {
        [NameSpace.App]: {
          currentCatalogPath: {
            currentPage: 1,
            search: '?_order=asc'
          }
        }
      }
    });
    expect(screen.getByTestId('sort-asc')).toBeChecked();
  });
});
