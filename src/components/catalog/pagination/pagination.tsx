import cn from 'classnames';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { selectCurrentCatalogPath } from '../../../store/slices/app-slice/selectors';
import { camerasLoadingStatusSelector } from '../../../store/slices/cameras-slice/selectors';
import styles from './pagination.module.css';

type PaginationProps = {
  pagesCount: number;
}

function Pagination({pagesCount}: PaginationProps) {
  const {isCamerasLoadingStatusPending} = useAppSelector(camerasLoadingStatusSelector);
  const {currentPage, search} = useAppSelector(selectCurrentCatalogPath);

  const paginationCn = cn(
    'pagination',
    {
      [styles.inactive]: isCamerasLoadingStatusPending
    }
  );

  return (
    <div className={paginationCn} data-testid='pagination'>
      <ul className="pagination__list">
        {currentPage !== 1 &&
        <li className="pagination__item">
          <Link
            data-testid='prev-link'
            className="pagination__link pagination__link--text"
            to={{
              pathname: generatePath(AppRoute.Catalog, {pageNumber: String(currentPage - 1)}),
              search
            }}
          >
            Назад
          </Link>
        </li>}

        {Array.from({length: pagesCount}, (_, k) => {
          const pageNumber = k + 1;
          const linkCn = cn(
            'pagination__link',
            {
              'pagination__link--active': currentPage === pageNumber
            }
          );

          return (
            <li className="pagination__item" key={k}>
              <Link
                className={linkCn}
                to={{
                  pathname: generatePath(AppRoute.Catalog, {pageNumber: String(pageNumber)}),
                  search
                }}
              >
                {pageNumber}
              </Link>
            </li>
          );
        })}

        {currentPage !== pagesCount &&
        <li className="pagination__item">
          <Link
            data-testid='next-link'
            className="pagination__link pagination__link--text"
            to={{
              pathname: generatePath(AppRoute.Catalog, {pageNumber: String(currentPage + 1)}),
              search
            }}
          >
            Далее
          </Link>
        </li>}
      </ul>
    </div>
  );
}

export default Pagination;
