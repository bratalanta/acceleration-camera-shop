import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute, MAX_CAMERAS_COUNT_PER_PAGE } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { selectCamerasTotalCount } from '../../../store/slices/cameras-slice/selectors';

type PaginationProps = {
  currentPage: number;
  onPaginationItemClick: (page: number) => void;
}

function Pagination({currentPage, onPaginationItemClick}: PaginationProps) {
  const camerasTotalCount = useAppSelector(selectCamerasTotalCount);
  const pagesCount = Math.ceil(camerasTotalCount / MAX_CAMERAS_COUNT_PER_PAGE);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {currentPage !== 1 &&
        <li className="pagination__item">
          <Link
            className="pagination__link pagination__link--text"
            to={AppRoute.Catalog}
            onClick={() => onPaginationItemClick(currentPage - 1)}
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
                to={AppRoute.Catalog}
                onClick={() => onPaginationItemClick(pageNumber)}
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
            to={AppRoute.Catalog}
            onClick={() => onPaginationItemClick(currentPage + 1)}
          >
            Далее
          </Link>
        </li>}
      </ul>
    </div>
  );
}

export default Pagination;
