import { generatePath, Link } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectCurrentCatalogPath } from '../../store/slices/app-slice/selectors';
import HeaderBasketCount from './header-basket-count/header-basket-count';
import Search from './search/search';

function Header() {
  const {currentPage, search} = useAppSelector(selectCurrentCatalogPath);

  return (
    <header className="header" id="header" data-testid='header'>
      <div className="container">
        <Link
          className="header__logo"
          to={{
            pathname: generatePath(AppRoute.Catalog, {pageNumber: currentPage ? String(currentPage) : DEFAULT_PAGE}),
            search
          }}
          aria-label="Переход на главную"
        >
          <svg width={100} height={36} aria-hidden="true">
            <use xlinkHref="#icon-logo" />
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link
                className="main-nav__link"
                to={{
                  pathname: generatePath(AppRoute.Catalog, {pageNumber: currentPage ? String(currentPage) : DEFAULT_PAGE}),
                  search
                }}
              >
                Каталог
              </Link>
            </li>
            <li className="main-nav__item">
              <Link
                className="main-nav__link"
                to={{
                  pathname: generatePath(AppRoute.Catalog, {pageNumber: currentPage ? String(currentPage) : DEFAULT_PAGE}),
                  search
                }}
              >
                  Гарантии
              </Link>
            </li>
            <li className="main-nav__item">
              <Link
                className="main-nav__link"
                to={{
                  pathname: generatePath(AppRoute.Catalog, {pageNumber: currentPage ? String(currentPage) : DEFAULT_PAGE}),
                  search
                }}
              >
                Доставка
              </Link>
            </li>
            <li className="main-nav__item">
              <Link
                className="main-nav__link"
                to={{
                  pathname: generatePath(AppRoute.Catalog, {pageNumber: currentPage ? String(currentPage) : DEFAULT_PAGE}),
                  search
                }}
              >
                О компании
              </Link>
            </li>
          </ul>
        </nav>
        <Search />
        <Link
          className="header__basket-link"
          to={AppRoute.Basket}
        >
          <svg width={16} height={16} aria-hidden="true">
            <use xlinkHref="#icon-basket" />
          </svg>
          <HeaderBasketCount />
        </Link>
      </div>
    </header>
  );
}

export default Header;
