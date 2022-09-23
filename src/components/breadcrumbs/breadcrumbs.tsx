import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
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

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.Catalog}>Главная
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
                  <Link className="breadcrumbs__link" to={AppRoute.Catalog}>
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
