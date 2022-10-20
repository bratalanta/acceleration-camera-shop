import { useSearchParams } from 'react-router-dom';
import { FilterBlock, FilterTitle, LimitedFilter, QueryParameter } from '../../../../../const';
import useResetPage from '../../../../../hooks/use-reset-page';

function CheckboxFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const resetPage = useResetPage();

  const changeSearch = (param: QueryParameter, value: string) => {
    if (!searchParams.getAll(param).includes(value)) {
      searchParams.append(param, value);
      setSearchParams(searchParams);
      resetPage(searchParams);

      return;
    }
    const newParams = Array.from(searchParams.entries())
      .filter(([_, currentValue]) => currentValue !== value);
    const newSearchParams = new URLSearchParams(newParams);

    setSearchParams(newSearchParams);
    resetPage(newSearchParams);
  };

  return (
    <>
      {Object.entries(FilterBlock).map(([title, names]) => {
        const currentParams = Array.from(searchParams.values());

        return (
          <fieldset className="catalog-filter__block" key={title} data-testid="checkbox-block">
            <legend className="title title--h5">{title}</legend>
            {names.map((name) => {
              const isTypeDisabled = currentParams.includes(LimitedFilter.Category) &&
              (name === LimitedFilter.Type['Моментальная'] || name === LimitedFilter.Type['Плёночная']);

              const isLimitedCategoryDisabled = (currentParams.includes(LimitedFilter.Type['Моментальная']) ||
              currentParams.includes(LimitedFilter.Type['Плёночная'])) && name === LimitedFilter.Category;

              return (
                <div className="custom-checkbox catalog-filter__item" key={name}>
                  <label>
                    <input
                      type="checkbox"
                      data-testid='checkbox'
                      name={name}
                      onChange={({target}) => changeSearch(FilterTitle[title], target.name)}
                      checked={currentParams.includes(name)}
                      disabled={isTypeDisabled || isLimitedCategoryDisabled}
                    />
                    <span className="custom-checkbox__icon" />
                    <span className="custom-checkbox__label">{name}</span>
                  </label>
                </div>
              );
            })}
          </fieldset>
        );
      })}
    </>
  );
}

export default CheckboxFilters;
