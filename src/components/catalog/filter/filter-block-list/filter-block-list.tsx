import { FilterBlock } from '../../../../const';

function FilterBlockList() {
  return (
    <>
      {Object.entries(FilterBlock).map(([title, names]) => {
        console.log(1);
        return (
          <fieldset className="catalog-filter__block" key={title}>
            <legend className="title title--h5">{title}</legend>
            {names.map((name) => (
              <div className="custom-checkbox catalog-filter__item" key={name}>
                <label>
                  <input type="checkbox" name={name} />
                  <span className="custom-checkbox__icon" />
                  <span className="custom-checkbox__label">{name}</span>
                </label>
              </div>
            ))}
          </fieldset>
        );
      })}
    </>
  );
}

export default FilterBlockList;
