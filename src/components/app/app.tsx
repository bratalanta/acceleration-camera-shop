import { Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import { AppRoute } from '../../const';
// import { AppRoute } from '../../const';
import Catalog from '../../pages/catalog/catalog';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
