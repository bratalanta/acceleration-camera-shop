import { screen } from '@testing-library/react';
import { AppRoute, NameSpace } from '../../const';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../tests/mocks/mocks';
import Breadcrumbs from './breadcrumbs';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';

const mockCamera = makeFakeCamera();
const mockState = {
  [NameSpace.Cameras]: {
    camera: mockCamera
  }
};

describe('Component: Breadcrumbs', () => {
  it('should render correctly if page is Catalog', () => {
    renderTestApp(<Breadcrumbs isCatalog/>, {
      initialState: mockState
    });


    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.queryByText(mockCamera.name)).not.toBeInTheDocument();
  });

  it('should render correctly if page is Product', () => {
    renderTestApp(<Breadcrumbs isProduct/>, {
      initialState: mockState
    });

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.getByText(mockCamera.name)).toBeInTheDocument();
  });

  it('should redirect to Catalog when user clicks on link', async () => {
    renderTestApp(
      <Routes>
        <Route
          path={AppRoute.Product}
          element={<Breadcrumbs isProduct/>}
        />
        <Route
          path={AppRoute.Catalog}
          element={<h1>Mock Catalog</h1>}
        />
      </Routes>
      , {
        initialState: mockState,
        initialRoute: AppRoute.Product
      });

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('bread-link'));

    expect(screen.getByText('Mock Catalog')).toBeInTheDocument();
  });
});
