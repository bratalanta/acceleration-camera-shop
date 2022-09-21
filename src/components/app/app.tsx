import { Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import { AppRoute } from '../../const';
import Catalog from '../../pages/catalog/catalog';
import Product from '../../pages/product/product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Navigate to={AppRoute.Catalog} />}
        />
        <Route
          path={AppRoute.Catalog}
          element={<Catalog />}
        />
        <Route
          path={AppRoute.Product}
          element={<Product />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
