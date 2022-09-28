import cn from 'classnames';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AppRoute } from '../../../const';
import usePagination from '../../../hooks/use-pagination';

type PaginationProps = {
  startPage: number;
  pagesCount: number;
}

function Pagination({startPage, pagesCount}: PaginationProps) {
  const [, setSearch] = useSearchParams();

  const {
    currentPage,
    nextPage,
    prevPage,
    jump,
  } = usePagination(startPage);

  useEffect(() => {
    setSearch({page: String(currentPage)});
  }, [currentPage]);

  console.log('pagination');
  console.log('---------');
  return (
    <div className="pagination">
      <ul className="pagination__list">
        {currentPage !== 1 &&
        <li className="pagination__item">
          <Link
            className="pagination__link pagination__link--text"
            to={AppRoute.Catalog}
            onClick={prevPage}
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
                onClick={() => jump(pageNumber)}
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
            onClick={nextPage}
          >
            Далее
          </Link>
        </li>}
      </ul>
    </div>
  );
}

export default Pagination;
