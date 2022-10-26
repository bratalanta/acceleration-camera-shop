import { ChangeEvent, useRef } from 'react';
import { Operation, PurchaseProductCount } from '../../../../../../const';
import { useAppDispatch } from '../../../../../../hooks';
import { changeBasketProductCount, replaceBasketProductCount } from '../../../../../../store/slices/basket-slice/basket-slice';
import { TCamera } from '../../../../../../types/camera';

type BasketProductControlsProps = {
  productCount: number;
  product: TCamera;
}

function BasketProductControls({productCount, product}: BasketProductControlsProps) {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value} = target;

    if (Number(inputRef.current?.value) > PurchaseProductCount.MaxCount) {
      target.value = String(PurchaseProductCount.MaxCount);
      dispatch(replaceBasketProductCount({
        product,
        value: PurchaseProductCount.MaxCount,
      }));

      return;
    }

    if (Number(value) < PurchaseProductCount.MinCount) {
      target.value = '';

      return;
    }

    if (value === '') {
      target.value = '';
      dispatch(replaceBasketProductCount({
        product,
        value: PurchaseProductCount.MinCount,
      }));

      return;
    }

    dispatch(replaceBasketProductCount({
      product,
      value: Number(value),
    }));
  };

  const handleDecreaseBtnClick = () => {
    if (!inputRef.current) {
      return;
    }

    if (Number(inputRef.current.value) === PurchaseProductCount.MinCount) {
      return;
    }

    inputRef.current.value = String(Number(inputRef.current.value) + Operation.Decrease);
    dispatch(changeBasketProductCount({
      product,
      value: Operation.Decrease
    }));
  };

  const handleIncreaseBtnClick = () => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.value = String(Number(inputRef.current.value) + Operation.Increase);
    dispatch(changeBasketProductCount({
      product,
      value: Operation.Increase
    }));
  };

  const handleInputBlur = ({target}: ChangeEvent<HTMLInputElement>) => {
    if (!target.value) {
      target.value = String(PurchaseProductCount.MinCount);
      dispatch(replaceBasketProductCount({
        product,
        value: PurchaseProductCount.MinCount,
      }));
    }
  };

  return (
    <div className="quantity">
      <button
        className="btn-icon btn-icon--prev"
        aria-label="уменьшить количество товара"
        onClick={handleDecreaseBtnClick}
      >
        <svg width={7} height={12} aria-hidden="true">
          <use xlinkHref="#icon-arrow" />
        </svg>
      </button>
      <label className="visually-hidden" htmlFor="counter1" />
      <input
        type="number"
        id="counter1"
        defaultValue={productCount}
        ref={inputRef}
        min={1}
        max={99}
        aria-label="количество товара"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <button
        className="btn-icon btn-icon--next"
        aria-label="увеличить количество товара"
        onClick={handleIncreaseBtnClick}
      >
        <svg width={7} height={12} aria-hidden="true">
          <use xlinkHref="#icon-arrow" />
        </svg>
      </button>
    </div>
  );
}

export default BasketProductControls;
