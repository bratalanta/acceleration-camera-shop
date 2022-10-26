import { generatePath, Link } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { selectCurrentCatalogPath } from '../../../store/slices/app-slice/selectors';

function CatalogBreadcrumbLink() {
  const {currentPage, search} = useAppSelector(selectCurrentCatalogPath);

  return (
    <li className="breadcrumbs__item">
      <Link
        className="breadcrumbs__link"
        data-testid='bread-link'
        to={{
          pathname: generatePath(
            AppRoute.Catalog,
            {pageNumber: currentPage ? String(currentPage) : DEFAULT_PAGE}
          ),
          search
        }}
      >
    Каталог
        <svg width={5} height={8} aria-hidden="true">
          <use xlinkHref="#icon-arrow-mini" />
        </svg>
      </Link>
    </li>
  );
}

export default CatalogBreadcrumbLink;
