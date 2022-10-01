import cn from 'classnames';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { selectCurrentCatalogPage } from '../../../store/slices/app-slice/selectors';
import { camerasLoadingStatusSelector } from '../../../store/slices/cameras-slice/selectors';
import styles from './pagination.module.css';

type PaginationProps = {
  pagesCount: number;
}

function Pagination({pagesCount}: PaginationProps) {
  const {isCamerasLoadingStatusPending} = useAppSelector(camerasLoadingStatusSelector);
  const currentPage = useAppSelector(selectCurrentCatalogPage);

  const paginationCn = cn(
    'pagination',
    {
      [styles.inactive]: isCamerasLoadingStatusPending
    }
  );

  return (
    <div className={paginationCn} >
      <ul className="pagination__list">
        {currentPage !== 1 &&
        <li className="pagination__item">
          <Link
            className="pagination__link pagination__link--text"
            to={generatePath(AppRoute.Catalog, {pageNumber: String(currentPage - 1)})}
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
                to={generatePath(AppRoute.Catalog, {pageNumber: String(pageNumber)})}
              >
                {pageNumber}
              </Link>
            </li>
          );
        })}

        {currentPage !== pagesCount &&
        <li className="pagination__item">
          <Link
            className="pagination__link pagination__link--text"
            to={generatePath(AppRoute.Catalog, {pageNumber: String(currentPage + 1)})}
          >
            Далее
          </Link>
        </li>}
      </ul>
    </div>
  );
}

export default Pagination;
