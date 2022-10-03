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

  if (!pagesCount && isCamerasLoadingStatusPending) {
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
      <div className="wrapper">
        <Header />
        <main>
          <Banner />
          <div className="page-content">
            <Breadcrumbs isCatalog />
            <section className="catalog">
              <div className="container">
                <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
                <div className="page-content__columns">
                  <div className="catalog__aside">
                    <div className="catalog-filter">
                      <form action="#">
                        <h2 className="visually-hidden">Фильтр</h2>
                        <fieldset className="catalog-filter__block">
                          <legend className="title title--h5">Цена, ₽</legend>
                          <div className="catalog-filter__price-range">
                            <div className="custom-input">
                              <label>
                                <input type="number" name="price" placeholder="от" />
                              </label>
                            </div>
                            <div className="custom-input">
                              <label>
                                <input type="number" name="priceUp" placeholder="до" />
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="catalog-filter__block">
                          <legend className="title title--h5">Категория</legend>
                          <div className="custom-checkbox catalog-filter__item">
                            <label>
                              <input type="checkbox" name="photocamera" defaultChecked /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Фотокамера</span>
                            </label>
                          </div>
                          <div className="custom-checkbox catalog-filter__item">
                            <label>
                              <input type="checkbox" name="videocamera" /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Видеокамера</span>
                            </label>
                          </div>
                        </fieldset>
                        <fieldset className="catalog-filter__block">
                          <legend className="title title--h5">Тип камеры</legend>
                          <div className="custom-checkbox catalog-filter__item">
                            <label>
                              <input type="checkbox" name="digital" defaultChecked /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Цифровая</span>
                            </label>
                          </div>
                          <div className="custom-checkbox catalog-filter__item">
                            <label>
                              <input type="checkbox" name="film" disabled /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Плёночная</span>
                            </label>
                          </div>
                          <div className="custom-checkbox catalog-filter__item">
                            <label>
                              <input type="checkbox" name="snapshot" /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Моментальная</span>
                            </label>
                          </div>
                          <div className="custom-checkbox catalog-filter__item">
                            <label>
                              <input type="checkbox" name="collection" defaultChecked disabled /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Коллекционная</span>
                            </label>
                          </div>
                        </fieldset>
                        <fieldset className="catalog-filter__block">
                          <legend className="title title--h5">Уровень</legend>
                          <div className="custom-checkbox catalog-filter__item">
                            <label>
                              <input type="checkbox" name="zero" defaultChecked /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Нулевой</span>
                            </label>
                          </div>
                          <div className="custom-checkbox catalog-filter__item">
                            <label>
                              <input type="checkbox" name="non-professional" /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Любительский</span>
                            </label>
                          </div>
                          <div className="custom-checkbox catalog-filter__item">
                            <label>
                              <input type="checkbox" name="professional" /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Профессиональный</span>
                            </label>
                          </div>
                        </fieldset>
                        <button className="btn catalog-filter__reset-btn" type="reset">Сбросить фильтры
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="catalog__content">
                    <div className="catalog-sort">
                      <form action="#">
                        <div className="catalog-sort__inner">
                          <p className="title title--h5">Сортировать:</p>
                          <div className="catalog-sort__type">
                            <div className="catalog-sort__btn-text">
                              <input type="radio" id="sortPrice" name="sort" defaultChecked />
                              <label htmlFor="sortPrice">по цене</label>
                            </div>
                            <div className="catalog-sort__btn-text">
                              <input type="radio" id="sortPopular" name="sort" />
                              <label htmlFor="sortPopular">по популярности</label>
                            </div>
                          </div>
                          <div className="catalog-sort__order">
                            <div className="catalog-sort__btn catalog-sort__btn--up">
                              <input type="radio" id="up" name="sort-icon" defaultChecked aria-label="По возрастанию" />
                              <label htmlFor="up">
                                <svg width={16} height={14} aria-hidden="true">
                                  <use xlinkHref="#icon-sort" />
                                </svg>
                              </label>
                            </div>
                            <div className="catalog-sort__btn catalog-sort__btn--down">
                              <input type="radio" id="down" name="sort-icon" aria-label="По убыванию" />
                              <label htmlFor="down">
                                <svg width={16} height={14} aria-hidden="true">
                                  <use xlinkHref="#icon-sort" />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
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
