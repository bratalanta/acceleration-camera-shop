import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { postOrderAction } from '../../../../../store/api-actions/orders-api/orders-api';
import { basketDiscountPriceSelector, basketPriceToPaySelector, basketTotalPriceSelector } from '../../../../../store/slices/basket-slice/selectors';
import { couponPostingStatusSelector } from '../../../../../store/slices/coupons-slice/selectors';
import { orderPostingStatusSelector, orderSelector } from '../../../../../store/slices/orders-slice/selectors';

function BasketOrder() {
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(basketTotalPriceSelector);
  const discountPrice = useAppSelector(basketDiscountPriceSelector);
  const priceToPay = useAppSelector(basketPriceToPaySelector);
  const {isCouponPostingStatusFulfilled} = useAppSelector(couponPostingStatusSelector);
  const {isOrderPostingStatusPending} = useAppSelector(orderPostingStatusSelector);
  const order = useAppSelector(orderSelector);

  const discountPriceCn = cn(
    'basket__summary-value',
    {'basket__summary-value--bonus': isCouponPostingStatusFulfilled}
  );

  const handlePostOrderBtnCLick = () => {
    if (!order.camerasIds.length) {
      return;
    }

    dispatch(postOrderAction(order));
  };

  return (
    <div className="basket__summary-order">
      <p className="basket__summary-item">
        <span className="basket__summary-text">Всего:</span>
        <span className="basket__summary-value">{totalPrice} ₽</span>
      </p>
      <p className="basket__summary-item">
        <span className="basket__summary-text">Скидка:</span>
        <span className={discountPriceCn}>{discountPrice} ₽</span>
      </p>
      <p className="basket__summary-item">
        <span className="basket__summary-text basket__summary-text--total">К оплате:</span>
        <span className="basket__summary-value basket__summary-value--total">{priceToPay} ₽</span>
      </p>
      <button
        className="btn btn--purple"
        type="button"
        onClick={handlePostOrderBtnCLick}
        disabled={isOrderPostingStatusPending}
      >
        Оформить заказ
      </button>
    </div>
  );
}

export default BasketOrder;
