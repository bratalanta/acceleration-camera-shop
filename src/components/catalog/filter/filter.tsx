import { useRef } from 'react';
import FilterBlockList from './filter-block-list/filter-block-list';
import FilterResetButton from './filter-reset-button/filter-reset-button';

function Filter() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="catalog__aside" data-testid='filter'>
      <div className="catalog-filter">
        <form action="#" ref={formRef}>
          <FilterBlockList />
          <FilterResetButton onFormReset={() => formRef.current && formRef.current.reset()}/>
        </form>
      </div>
    </div>
  );
}

export default Filter;
