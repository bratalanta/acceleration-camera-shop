import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, NameSpace } from '../../../../const';
import { renderTestApp } from '../../../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../../../tests/mocks/mocks';
import SearchList from './search-list';

const mockCamera = makeFakeCamera();

describe('Component: SearchList', () => {
  it('should render correctly', () => {
    renderTestApp(<SearchList />, {
      initialState: {
        [NameSpace.Cameras]: {
          likelyCameras: [mockCamera]
        }
      }
    });

    expect(screen.getByTestId('likely')).toBeInTheDocument();
    expect(screen.getByText(mockCamera.name)).toBeInTheDocument();

  });

  it('should not render list', () => {
    renderTestApp(<SearchList />, {
      initialState: {
        [NameSpace.Cameras]: {
          likelyCameras: []
        }
      }
    });

    expect(screen.queryByTestId('likely')).not.toBeInTheDocument();
  });

  it('should redirect to Catalog when user clicks on link', async () => {
    renderTestApp(
      <Routes>
        <Route
          path={AppRoute.Catalog}
          element={<SearchList />}
        />
        <Route
          path={AppRoute.Product}
          element={<h1>Mock Product</h1>}
        />
      </Routes>
      , {
        initialState: {
          [NameSpace.Cameras]: {
            likelyCameras: [mockCamera]
          }
        },
        initialRoute: AppRoute.Catalog
      });

    await userEvent.click(screen.getByTestId('likely'));

    expect(screen.getByText('Mock Product')).toBeInTheDocument();
  });
});
