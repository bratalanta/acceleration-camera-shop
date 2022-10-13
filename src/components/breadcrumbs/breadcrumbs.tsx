import { generatePath, Link } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectCurrentCatalogPath } from '../../store/slices/app-slice/selectors';
import { selectCamera } from '../../store/slices/cameras-slice/selectors';

type CatalogBreadcrumbsProps = {
  isCatalog: boolean;
  isProduct?: never;
};

type ProductBreadcrumbsProps = {
  isCatalog?: never;
  isProduct: boolean;
};

type BreadcrumbsProps = CatalogBreadcrumbsProps | ProductBreadcrumbsProps;

function Breadcrumbs({isCatalog, isProduct}: BreadcrumbsProps) {
  const {name} = useAppSelector(selectCamera);
  const {currentPage, search} = useAppSelector(selectCurrentCatalogPath);

  return (
    <div className="breadcrumbs" data-testid={'breadcrumbs'}>
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to='#'>Главная
              <svg width={5} height={8} aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini" />
              </svg>
            </Link>
          </li>
          {
            isCatalog &&
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link breadcrumbs__link--active">
                  Каталог
                </span>
              </li>
          }
          {
            isProduct &&
              <>
                <li className="breadcrumbs__item">
                  <Link
                    className="breadcrumbs__link"
                    data-testid='bread-link'
                    to={{
                      pathname: generatePath(AppRoute.Catalog, {pageNumber: currentPage ? String(currentPage) : DEFAULT_PAGE}),
                      search
                    }}
                  >
                Каталог
                    <svg width={5} height={8} aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini" />
                    </svg>
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <span className="breadcrumbs__link breadcrumbs__link--active">
                    {name}
                  </span>
                </li>
              </>
          }
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
