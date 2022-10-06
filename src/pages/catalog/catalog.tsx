import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Banner from '../../components/catalog/banner/banner';
import Pagination from '../../components/catalog/pagination/pagination';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FullPageLoader from '../../components/loaders/full-page-loader/full-page-loader';
import ProductCardList from '../../components/product-card-list/product-card-list';
import { DEFAULT_TITLE, MAX_PRODUCTS_COUNT_PER_PAGE } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCamerasAction } from '../../store/api-actions/cameras-api/cameras-api';
import { fetchPromoAction } from '../../store/api-actions/promo-api/promo-api';
import { setCurrentCatalogPage } from '../../store/slices/app-slice/app-slice';
import { camerasLoadingStatusSelector, selectCameras, selectCamerasTotalCount } from '../../store/slices/cameras-slice/selectors';
import NotFound from '../not-found/not-found';
import { Helmet } from 'react-helmet';
import ErrorMessage from '../error-message/error-message';
import Sort from '../../components/catalog/sort/sort';
import Filter from '../../components/catalog/filter/filter';

function Catalog() {
  const dispatch = useAppDispatch();

  const cameras = useAppSelector(selectCameras);
  const camerasTotalCount = useAppSelector(selectCamerasTotalCount);
  const {isCamerasLoadingStatusRejected, isCamerasLoadingStatusPending} = useAppSelector(camerasLoadingStatusSelector);
  const {pathname} = useLocation();

  const pagesCount = useMemo(() => (
    Math.ceil(camerasTotalCount / MAX_PRODUCTS_COUNT_PER_PAGE)
  ), [camerasTotalCount]);

  const currentPage = Number(pathname.split('_')[1]);

  useEffect(() => {
    if (currentPage) {
      dispatch(setCurrentCatalogPage(currentPage));
      dispatch(fetchCamerasAction({
        limit: MAX_PRODUCTS_COUNT_PER_PAGE,
        page: currentPage
      }));
    }
  }, [currentPage, dispatch]);

  useEffect(() => {
    dispatch(fetchPromoAction());
  }, []);

  if (!pagesCount && currentPage > 0 && isCamerasLoadingStatusPending) {
    return <FullPageLoader />;
  }

  if (isCamerasLoadingStatusRejected) {
    return <ErrorMessage />;
  }

  if (currentPage > pagesCount || currentPage < 1) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{DEFAULT_TITLE}</title>
      </Helmet>
      <div className="wrapper" data-testid='catalog'>
        <Header />
        <main>
          <Banner />
          <div className="page-content">
            <Breadcrumbs isCatalog />
            <section className="catalog">
              <div className="container">
                <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
                <div className="page-content__columns">
                  <Filter />
                  <div className="catalog__content">
                    <Sort />
                    <div className="cards catalog__cards">
                      <ProductCardList cameras={cameras} />
                    </div>
                    <Pagination pagesCount={pagesCount} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Catalog;
