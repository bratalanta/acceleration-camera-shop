import CheckboxFilters from './checkbox-filters/checkbox-filters';
import PriceFilter from './price-filter/price-filter';

function FilterBlockList() {
  return (
    <>
      <h2 className="visually-hidden">Фильтр</h2>
      <PriceFilter />
      <CheckboxFilters />
    </>
  );
}

export default FilterBlockList;
