import { generatePath, Link } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectCurrentCatalogPage } from '../../store/slices/app-slice/selectors';
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
  const currentCatalogPage = useAppSelector(selectCurrentCatalogPage);

  return (
    <div className="breadcrumbs">
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
                    to={generatePath(AppRoute.Catalog, {pageNumber: currentCatalogPage || DEFAULT_PAGE})}
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
