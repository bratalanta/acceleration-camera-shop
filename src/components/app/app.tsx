import { Route, Routes, Navigate, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import Catalog from '../../pages/catalog/catalog';
import NotFound from '../../pages/not-found/not-found';
import Product from '../../pages/product/product';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Navigate
            to={generatePath(AppRoute.Catalog, {page: 'page_1'})}
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

export default App;
