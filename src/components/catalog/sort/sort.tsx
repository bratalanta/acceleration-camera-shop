import { ChangeEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QueryParameter, SortOrder, SortType } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { selectCurrentCatalogPath } from '../../../store/slices/app-slice/selectors';

function Sort() {
  const {search} = useAppSelector(selectCurrentCatalogPath);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has(QueryParameter.Sort) && !searchParams.has(QueryParameter.Order)) {
      searchParams.set(QueryParameter.Order, SortOrder.Asc);
      setSearchParams(searchParams);
    }

    if (!searchParams.has(QueryParameter.Sort) && searchParams.has(QueryParameter.Order)) {
      searchParams.set(QueryParameter.Sort, SortType.Price);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;

    switch(name) {
      case QueryParameter.Sort:
        searchParams.set(QueryParameter.Sort, value);
        break;
      case QueryParameter.Order:
        searchParams.set(QueryParameter.Order, value);
    }

    setSearchParams(searchParams);
  };

  return (
    <div className="catalog-sort" data-testid='sort'>
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input
                data-testid="sort-price"
                type="radio"
                id="sortPrice"
                name="_sort"
                value="price"
                onChange={handleInputChange}
                checked={search?.includes(`${QueryParameter.Sort}=${SortType.Price}`)}
              />
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="sortPopular"
                name="_sort"
                value="rating"
                onChange={handleInputChange}
                checked={search?.includes(SortType.Rating)}
              />
              <label htmlFor="sortPopular">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input
                data-testid="sort-asc"
                type="radio"
                id="up"
                name="_order"
                value="asc"
                aria-label="По возрастанию"
                onChange={handleInputChange}
                checked={search?.includes(SortOrder.Asc)}
              />
              <label htmlFor="up">
                <svg width={16} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-sort" />
                </svg>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input
                type="radio"
                id="down"
                name="_order"
                value="desc"
                aria-label="По убыванию"
                onChange={handleInputChange}
                checked={search?.includes(SortOrder.Desc)}
              />
              <label htmlFor="down">
                <svg width={16} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-sort" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Sort;
