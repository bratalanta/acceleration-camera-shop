import { Route, Routes, Navigate, generatePath } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE } from '../const';
import Catalog from '../pages/catalog/catalog';
import NotFound from '../pages/not-found/not-found';
import Product from '../pages/product/product';

function AppRouter() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Navigate
            to={{
              pathname: generatePath(AppRoute.Catalog, {pageNumber: DEFAULT_PAGE})
            }}
          />
        }
      />
      <Route
        path={AppRoute.Catalog}
        element={<Catalog />}
      />
      <Route
        path={AppRoute.Product}
        element={<Product />}
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFound />}
      />
    </Routes>
  );
}

export default AppRouter;
