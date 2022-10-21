import { ChangeEvent, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QueryParameter } from '../../../../../const';
import { useAppSelector } from '../../../../../hooks';
import useKeydown from '../../../../../hooks/use-keydown';
import useOnOutsidePriceFilterClick from '../../../../../hooks/use-on-outside-price-filter-click';
import useResetPage from '../../../../../hooks/use-reset-page';
import { selectCamerasPriceRange } from '../../../../../store/slices/cameras-slice/selectors';

function PriceFilter() {
  const resetPage = useResetPage();
  const {minPrice = 0, maxPrice = 0} = useAppSelector(selectCamerasPriceRange);
  const [searchParams, setSearchParams] = useSearchParams();
  const isFilterActivated = useRef(false);
  const minPriceInputRef = useRef<HTMLInputElement>(null);
  const maxPriceInputRef = useRef<HTMLInputElement>(null);

  const minPriceSearch = searchParams.get(QueryParameter.PriceFloor);
  const maxPriceSearch = searchParams.get(QueryParameter.PriceCeil);

  const changePrice = () => {
    if (!minPriceInputRef.current || !maxPriceInputRef.current || !isFilterActivated.current) {
      return;
    }

    const maxPriceInputValue = maxPriceInputRef.current?.value;
    const minPriceInputValue = minPriceInputRef.current?.value;

    if (!maxPriceInputValue && !minPriceInputValue) {
      return;
    }

    isFilterActivated.current = false;

    if (minPriceInputValue === maxPriceInputValue) {
      searchParams.set(QueryParameter.PriceFloor, minPriceInputValue);
      searchParams.set(QueryParameter.PriceCeil, maxPriceInputValue);

      setSearchParams(searchParams);
      resetPage(searchParams);

      return;
    }

    if (minPriceInputValue) {
      searchParams.set(QueryParameter.PriceFloor, minPriceInputValue);
      minPriceInputRef.current.value = String(minPrice);

      if (Number(minPriceInputValue) > maxPrice) {
        minPriceInputRef.current.value = String(minPrice);
        searchParams.set(QueryParameter.PriceFloor, String(minPrice));
      }
    }

    if (maxPriceInputValue) {
      searchParams.set(QueryParameter.PriceCeil, maxPriceInputValue);
      maxPriceInputRef.current.value = String(maxPrice);

      if (Number(maxPriceInputValue) < minPrice) {
        maxPriceInputRef.current.value = String(maxPrice);
        searchParams.set(QueryParameter.PriceCeil, String(maxPrice));
      }
    }

    setSearchParams(searchParams);
    resetPage(searchParams);
  };

  useKeydown('Enter', changePrice);
  useOnOutsidePriceFilterClick(minPriceInputRef, maxPriceInputRef, changePrice);

  useEffect(() => {
    if (maxPriceInputRef.current?.value) {
      maxPriceInputRef.current.value = String(maxPrice);
    }

    if (minPriceInputRef.current?.value) {
      minPriceInputRef.current.value = String(minPrice);
    }
  }, [maxPrice, minPrice]);

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    if (Number(target.value) < 0) {
      target.value = '';
    }

    isFilterActivated.current = true;
  };

  return (
    <fieldset className="catalog-filter__block" data-testid="price-filter">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="price_gte"
              ref={minPriceInputRef}
              data-testid='input-min'
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
              data-testid='input-max'
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
