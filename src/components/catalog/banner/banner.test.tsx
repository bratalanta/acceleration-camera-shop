import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, NameSpace } from '../../../const';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../../tests/mocks/mocks';
import Banner from './banner';

const mockCamera = makeFakeCamera();
const mockState = {
  [NameSpace.Promo]: {
    promo: mockCamera
  }
};

describe('Component: Banner', () => {
  it('should render correctly', () => {
    renderTestApp(<Banner />, {
      initialState: mockState
    });

    expect(screen.getByTestId('banner')).toBeInTheDocument();
  });

  it('should redirect to Product when user clicks on link', async () => {
    renderTestApp(
      <Routes>
        <Route
          path={AppRoute.Catalog}
          element={<Banner />}
        />
        <Route
          path={AppRoute.Product}
          element={<h1>Mock Product</h1>}
        />
      </Routes>
      , {
        initialState: mockState,
        initialRoute: AppRoute.Catalog
      });

    expect(screen.getByTestId('banner')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('banner-link'));

    expect(screen.getByText('Mock Product')).toBeInTheDocument();
  });
});
