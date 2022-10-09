import { generatePath, Link } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectCurrentCatalogPage } from '../../store/slices/app-slice/selectors';

function Header() {
  const currentCatalogPage = useAppSelector(selectCurrentCatalogPage);

  return (
    <header className="header" id="header" data-testid='header'>
      <div className="container">
        <Link className="header__logo" to="index.html" aria-label="Переход на главную">
          <svg width={100} height={36} aria-hidden="true">
            <use xlinkHref="#icon-logo" />
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link
                className="main-nav__link"
                to={generatePath(AppRoute.Catalog, {pageNumber: currentCatalogPage ? String(currentCatalogPage) : DEFAULT_PAGE})}
              >
                Каталог
              </Link>
            </li>
            <li className="main-nav__item"><Link className="main-nav__link" to="#">Гарантии</Link>
            </li>
            <li className="main-nav__item"><Link className="main-nav__link" to="#">Доставка</Link>
            </li>
            <li className="main-nav__item"><Link className="main-nav__link" to="#">О компании</Link>
            </li>
          </ul>
        </nav>
        <div className="form-search">
          <form>
            <label>
              <svg className="form-search__icon" width={16} height={16} aria-hidden="true">
                <use xlinkHref="#icon-lens" />
              </svg>
              <input className="form-search__input" type="text" autoComplete="off" placeholder="Поиск по сайту" />
            </label>
            <ul className="form-search__select-list">
              <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 8i</li>
              <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 7i</li>
              <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 6i</li>
              <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 5i</li>
              <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 4i</li>
            </ul>
          </form>
          <button className="form-search__reset" type="reset">
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg><span className="visually-hidden">Сбросить поиск</span>
          </button>
        </div>
        <Link className="header__basket-link" to="#">
          <svg width={16} height={16} aria-hidden="true">
            <use xlinkHref="#icon-basket" />
          </svg><span className="header__basket-count">3</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
