import { Link } from 'react-router-dom';
import { BreadcrumbName } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectCamera } from '../../store/slices/cameras-slice/selectors';
import BreadcrumbItem from './breadcrumb-item/breadcrumb-item';
import CatalogBreadcrumbLink from './catalog-breadcrumb-link/catalog-breadcrumb-link';

type BreadcrumbsProps = {
  isCatalog?: boolean;
  isProduct?: boolean;
  isBasket?: boolean;
};

function Breadcrumbs({isCatalog, isProduct, isBasket}: BreadcrumbsProps) {
  const {name} = useAppSelector(selectCamera);

  return (
    <div className="breadcrumbs" data-testid='breadcrumbs'>
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
              <BreadcrumbItem name={BreadcrumbName.Catalog}/>
          }
          {
            isProduct &&
              <>
                <CatalogBreadcrumbLink />
                <BreadcrumbItem name={name}/>
              </>
          }
          {
            isBasket &&
            <>
              <CatalogBreadcrumbLink />
              <BreadcrumbItem name={BreadcrumbName.Basket}/>
            </>
          }
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
