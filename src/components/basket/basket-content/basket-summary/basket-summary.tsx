import BasketOrder from './basket-order/basket-order';
import BasketCoupon from './basket-coupon/basket-coupon';

function BasketSummary() {
  return (
    <div className="basket__summary" data-testid="summary">
      <BasketCoupon />
      <BasketOrder />
    </div>
  );
}

export default BasketSummary;
