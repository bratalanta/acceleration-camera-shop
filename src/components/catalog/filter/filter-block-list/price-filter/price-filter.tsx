import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QueryParameter } from '../../../../../const';
import { useAppSelector } from '../../../../../hooks';
import { selectCamerasPriceRange } from '../../../../../store/slices/cameras-slice/selectors';

function PriceFilter() {
  const {minPrice = 0, maxPrice = 0} = useAppSelector(selectCamerasPriceRange);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePriceInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    const numValue = Number(value);

    if (numValue < minPrice || numValue > maxPrice) {
      const borderValue = String(name === QueryParameter.PriceFloor ? minPrice : maxPrice);

      if (searchParams.get(name) !== borderValue) {
        searchParams.set(name, borderValue);
        setSearchParams(searchParams);

        return;
      }

      return;
    }

    switch (searchParams.has(name)) {
      case true:
        searchParams.set(name, value);
        break;
      case false:
        searchParams.append(name, value);
    }

    setSearchParams(searchParams);
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="price_gte"
              placeholder={String(minPrice)}
              onChange={handlePriceInputChange}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="price_lte"
              placeholder={String(maxPrice)}
              onChange={handlePriceInputChange}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default PriceFilter;
