import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QueryParameter, SortOrder, SortType } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { selectCurrentCatalogPath } from '../../../store/slices/app-slice/selectors';

type SortProps = {
  changeSearch: (parameter: QueryParameter, value: string) => void;
}

function Sort({changeSearch}: SortProps) {
  const {search} = useAppSelector(selectCurrentCatalogPath);
  const [searchParams] = useSearchParams();
  const [sortActivatedBy, setSortActivatedBy] = useState<QueryParameter | null>();

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name;
    const value = evt.target.value;

    switch(name) {
      case QueryParameter.Sort:
        changeSearch(QueryParameter.Sort, value);

        return;
      case QueryParameter.Order:
        changeSearch(QueryParameter.Order, value);
    }
  };

  useEffect(() => {
    setSortActivatedBy(null);
    const isSortSearch = search?.includes(QueryParameter.Sort) && !search?.includes(QueryParameter.Order);
    const isOrderSearch = !search?.includes(QueryParameter.Sort) && search?.includes(QueryParameter.Order);

    if (isSortSearch) {
      setSortActivatedBy(QueryParameter.Sort);
    }

    if (isOrderSearch) {
      setSortActivatedBy(QueryParameter.Order);
    }
  }, [search, sortActivatedBy]);

  console.log(sortActivatedBy);
  return (
    <div className="catalog-sort" data-testid='sort'>
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="sortPrice"
                name="_sort"
                value="price"
                onChange={handleInputChange}
                checked={(searchParams.get(QueryParameter.Sort) && search?.includes(SortType.Price)) ||
                   sortActivatedBy === QueryParameter.Order}
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
                type="radio"
                id="up"
                name="_order"
                value="asc"
                aria-label="По возрастанию"
                onChange={handleInputChange}
                checked={search?.includes(SortOrder.Asc) || sortActivatedBy === QueryParameter.Sort}
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
