import { ChangeEvent, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QueryParameter } from '../../../../../const';
import { useAppSelector } from '../../../../../hooks';
import useKeydown from '../../../../../hooks/use-keydown';
import { selectCamerasPriceRange } from '../../../../../store/slices/cameras-slice/selectors';

function PriceFilter() {
  const {minPrice = 0, maxPrice = 0} = useAppSelector(selectCamerasPriceRange);
  const [searchParams, setSearchParams] = useSearchParams();
  const minPriceInputRef = useRef<HTMLInputElement>(null);
  const maxPriceInputRef = useRef<HTMLInputElement>(null);

  const minPriceSearch = searchParams.get(QueryParameter.PriceFloor);
  const maxPriceSearch = searchParams.get(QueryParameter.PriceCeil);

  const changePrice = () => {
    const minPriceInputValue = minPriceInputRef.current?.value;
    const maxPriceInputValue = maxPriceInputRef.current?.value;

    if (minPriceInputValue) {
      searchParams.set(QueryParameter.PriceFloor, minPriceInputValue);

      if (Number(minPriceInputValue) < minPrice) {
        searchParams.set(QueryParameter.PriceFloor, String(minPrice));
      }

      if (Number(minPriceInputValue) > maxPrice) {
        searchParams.set(QueryParameter.PriceFloor, String(minPrice));
      }
    }

    if (maxPriceInputValue) {
      searchParams.set(QueryParameter.PriceCeil, maxPriceInputValue);

      if (Number(maxPriceInputValue) > maxPrice) {
        maxPriceInputRef.current.value = String(maxPrice);
        searchParams.set(QueryParameter.PriceCeil, String(maxPrice));
      }

      if (Number(maxPriceInputValue) < minPrice) {
        searchParams.set(QueryParameter.PriceCeil, String(minPrice));
      }

      if (Number(maxPriceInputValue) < Number(minPriceInputValue)) {
        maxPriceInputRef.current.value = String(maxPrice);
        searchParams.set(QueryParameter.PriceCeil, String(maxPrice));
      }
    }

    setSearchParams(searchParams);
  };

  useKeydown('Enter', changePrice);

  useEffect(() => {
    if (maxPriceInputRef.current?.value) {
      if (Number(maxPriceInputRef.current?.value) > maxPrice) {
        maxPriceInputRef.current.value = String(maxPrice);
      }

      if (Number(maxPriceInputRef.current?.value) < minPrice) {
        maxPriceInputRef.current.value = String(minPrice);
      }
    }

    if (minPriceInputRef.current?.value) {
      if (Number(minPriceInputRef.current?.value) < minPrice) {
        minPriceInputRef.current.value = String(minPrice);
      }

      if (Number(minPriceInputRef.current?.value) > maxPrice) {
        minPriceInputRef.current.value = String(minPrice);
      }
    }
  });

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    if (Number(target.value) < 0) {
      target.value = '';
    }
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
              ref={minPriceInputRef}
              onChange={handleInputChange}
              placeholder={String(minPrice)}
              defaultValue={minPriceSearch ? minPriceSearch : ''}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="price_lte"
              ref={maxPriceInputRef}
              onChange={handleInputChange}
              placeholder={String(maxPrice)}
              defaultValue={maxPriceSearch ? maxPriceSearch : ''}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default PriceFilter;
