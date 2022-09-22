import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Banner from '../../components/catalog/banner/banner';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ProductCardList from '../../components/product-card-list/product-card-list';
import { useAppSelector } from '../../hooks';
import { selectCameras } from '../../store/slices/cameras-slice/selectors';

function Catalog() {
  const cameras = useAppSelector(selectCameras);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <Breadcrumbs isCatalog/>
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
                    <ProductCardList cameras={cameras}/>
                  </div>
                  <div className="pagination">
                    <ul className="pagination__list">
                      <li className="pagination__item"><a className="pagination__link pagination__link--active">1</a>
                      </li>
                      <li className="pagination__item"><a className="pagination__link">2</a>
                      </li>
                      <li className="pagination__item"><a className="pagination__link">3</a>
                      </li>
                      <li className="pagination__item"><a className="pagination__link pagination__link--text">Далее</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Catalog;
