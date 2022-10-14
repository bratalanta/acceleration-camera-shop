import { useRef } from 'react';
import FilterBlockList from './filter-block-list/filter-block-list';

function Filter() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="catalog__aside" data-testid='filter'>
      <div className="catalog-filter">
        <form action="#" ref={formRef}>
          <h2 className="visually-hidden">Фильтр</h2>
          <FilterBlockList />
          <button
            className="btn catalog-filter__reset-btn"
            type="reset"
            onClick={() => formRef.current && formRef.current.reset()}
          >
            Сбросить фильтры
          </button>
        </form>
      </div>
    </div>
  );
}

export default Filter;
