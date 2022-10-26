import cn from 'classnames';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AvailableCoupon } from '../../../../../const';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { postCouponAction } from '../../../../../store/api-actions/coupons-api/coupons-api';
import { setCurrentCoupon } from '../../../../../store/slices/coupons-slice/coupons-slice';
import { couponPostingStatusSelector, selectCurrentCoupon } from '../../../../../store/slices/coupons-slice/selectors';

function BasketCoupon() {
  const dispatch = useAppDispatch();
  const currentCoupon = useAppSelector(selectCurrentCoupon);
  const {
    isCouponPostingStatusFulfilled,
    isCouponPostingStatusPending,
    isCouponPostingStatusRejected
  } = useAppSelector(couponPostingStatusSelector);

  const [inputValue, setInputValue] = useState<string>(
    currentCoupon && isCouponPostingStatusFulfilled ? currentCoupon : ''
  );

  useEffect(() => (
    () => {
      if (isCouponPostingStatusFulfilled) {
        dispatch(setCurrentCoupon(inputValue));
      }
    }
  ));

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value} = target;

    if (value.includes(' ')) {
      return;
    }

    setInputValue(value);
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (!inputValue) {
      return;
    }

    dispatch(postCouponAction(
      AvailableCoupon[inputValue as keyof typeof AvailableCoupon]
    ));
  };

  const inputWrapperCn = cn('custom-input', {
    'is-invalid': isCouponPostingStatusRejected,
    'is-valid': isCouponPostingStatusFulfilled
  });

  return (
    <div className="basket__promo">
      <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
      <div className="basket-form">
        <form onSubmit={handleSubmit}>
          <div className={inputWrapperCn}>
            <label>
              <span className="custom-input__label">Промокод</span>
              <input
                type="text"
                name="promo"
                placeholder="Введите промокод"
                value={inputValue}
                onChange={handleInputChange}
              />
            </label>
            <p className="custom-input__error">Промокод неверный</p>
            <p className="custom-input__success">Промокод принят!</p>
          </div>
          <button
            className="btn"
            type="submit"
            disabled={isCouponPostingStatusPending}
          >
            Применить
          </button>
        </form>
      </div>
    </div>
  );
}

export default BasketCoupon;
