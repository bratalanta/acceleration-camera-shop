import { screen } from '@testing-library/react';
import { generatePath } from 'react-router-dom';
import { AppRoute, LoadingStatus, NameSpace } from '../../../const';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import Pagination from './pagination';

const mockPagesCount = 5;
const currentCatalogPage = 3;

const mockState = {
  [NameSpace.App]: {
    currentCatalogPage: currentCatalogPage
  },
  [NameSpace.Cameras]: {
    camerasLoadingStatus: LoadingStatus.Fulfilled
  }
};

describe('Component: Pagination', () => {
  it('should render correctly', () => {
    renderTestApp(<Pagination pagesCount={mockPagesCount}/>, {
      initialState: mockState
    });

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });

  it('should not render prev-link when user on the first page', async () => {
    const mockStateFirstPage = {
      [NameSpace.App]: {
        currentCatalogPage: 1
      },
      [NameSpace.Cameras]: {
        camerasLoadingStatus: LoadingStatus.Fulfilled
      }
    };

    renderTestApp(<Pagination pagesCount={mockPagesCount}/>, {
      initialState: mockStateFirstPage,
      initialRoute: generatePath(AppRoute.Catalog, {pageNumber: String(currentCatalogPage)})
    });

    expect(screen.queryByTestId('prev-link')).not.toBeInTheDocument();

  });

  it('should not render next-link when user on the last page', async () => {
    const mockStateLastPage = {
      [NameSpace.App]: {
        currentCatalogPage: mockPagesCount
      },
      [NameSpace.Cameras]: {
        camerasLoadingStatus: LoadingStatus.Fulfilled
      }
    };

    renderTestApp(<Pagination pagesCount={mockPagesCount}/>, {
      initialState: mockStateLastPage,
      initialRoute: generatePath(AppRoute.Catalog, {pageNumber: String(currentCatalogPage)})
    });

    expect(screen.queryByTestId('next-link')).not.toBeInTheDocument();
  });
});
