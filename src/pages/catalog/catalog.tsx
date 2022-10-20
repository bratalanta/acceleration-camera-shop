import { useEffect, useMemo, useRef } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Banner from '../../components/catalog/banner/banner';
import Pagination from '../../components/catalog/pagination/pagination';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FullPageLoader from '../../components/loaders/full-page-loader/full-page-loader';
import ProductCardList from '../../components/product-card-list/product-card-list';
import { DEFAULT_TITLE, MAX_PRODUCTS_COUNT_PER_PAGE, QueryParameter } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCamerasAction, fetchMinMaxCameraPricesAction } from '../../store/api-actions/cameras-api/cameras-api';
import { fetchPromoAction } from '../../store/api-actions/promo-api/promo-api';
import { setCurrentCatalogPath } from '../../store/slices/app-slice/app-slice';
import { camerasLoadingStatusSelector, selectCameras, selectCamerasTotalCount } from '../../store/slices/cameras-slice/selectors';
import NotFound from '../not-found/not-found';
import { Helmet } from 'react-helmet';
import ErrorMessage from '../error-message/error-message';
import Sort from '../../components/catalog/sort/sort';
import Filter from '../../components/catalog/filter/filter';
import InnerLoader from '../../components/loaders/inner-loader/inner-loader';
import NoCameras from '../../components/catalog/no-cameras/no-cameras';

function Catalog() {
  const dispatch = useAppDispatch();

  const cameras = useAppSelector(selectCameras);
  const camerasTotalCount = useAppSelector(selectCamerasTotalCount);
  const {isCamerasLoadingStatusRejected, isCamerasLoadingStatusPending} = useAppSelector(camerasLoadingStatusSelector);
  const {pageNumber} = useParams();
  const [searchParams] = useSearchParams();
  const isMounted = useRef(false);

  const sortParams = {
    sortType: searchParams.get(QueryParameter.Sort),
    sortOrder: searchParams.get(QueryParameter.Order),
  };

  const filterParams = {
    category: searchParams.getAll(QueryParameter.Category),
    level: searchParams.getAll(QueryParameter.Level),
    priceCeil: searchParams.get(QueryParameter.PriceCeil),
    priceFloor: searchParams.get(QueryParameter.PriceFloor),
    type: searchParams.getAll(QueryParameter.Type),
  };
  const filterParamsJSON = JSON.stringify(filterParams);

  const pagesCount = useMemo(() => (
    Math.ceil(camerasTotalCount / MAX_PRODUCTS_COUNT_PER_PAGE)
  ), [camerasTotalCount]);

  const currentPage = Number(pageNumber);

  useEffect(() => {
    if (currentPage) {
      dispatch(setCurrentCatalogPath({
        currentPage,
        search: decodeURI(searchParams.toString())
      }));
      dispatch(fetchCamerasAction({
        limit: MAX_PRODUCTS_COUNT_PER_PAGE,
        currentPage,
        queryParams: {
          ...sortParams,
          ...filterParams
        },
      }));
    }
  }, [currentPage, dispatch, searchParams]);

  useEffect(() => {
    dispatch(fetchPromoAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMinMaxCameraPricesAction(filterParams));
  }, [filterParamsJSON]);

  if (currentPage === 0) {
    return <NotFound />;
  }

  if (isCamerasLoadingStatusPending && !pagesCount && !isMounted.current) {
    return <FullPageLoader />;
  }

  if (isCamerasLoadingStatusRejected) {
    return <ErrorMessage />;
  }

  if ((currentPage > pagesCount || currentPage < 1) && pagesCount !== 0) {
    return <NotFound />;
  }

  isMounted.current = true;

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
                    {isCamerasLoadingStatusPending ? <InnerLoader /> : ''}
                    {cameras.length && !isCamerasLoadingStatusPending ?
                      <>
                        <div className="cards catalog__cards">
                          <ProductCardList cameras={cameras} />
                        </div>
                        <Pagination pagesCount={pagesCount} />
                      </> : ''}
                    {!cameras.length && !isCamerasLoadingStatusPending ? <NoCameras /> : ''}
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
