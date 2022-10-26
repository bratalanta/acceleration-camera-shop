import { createSelector } from 'reselect';
import { LoadingStatus, NameSpace } from '../../../const';
import { State } from '../../../types/state';
import { selectBasketProducts } from '../basket-slice/selectors';
import { selectCurrentCoupon } from '../coupons-slice/selectors';

const selectOrderPostingStatus = (state: State) => state[NameSpace.Orders].orderPostingStatus;

const orderSelector = createSelector(
  [
    selectCurrentCoupon,
    selectBasketProducts
  ], (coupon, products) => ({
    camerasIds: products.map(({product}) => product.id),
    coupon: !coupon ? null : coupon,
  })
);

const orderPostingStatusSelector = createSelector(
  [
    selectOrderPostingStatus,
  ],
  (status) => (
    {
      isOrderPostingStatusFulfilled: status === LoadingStatus.Fulfilled,
      isOrderPostingStatusPending: status === LoadingStatus.Pending,
      isOrderPostingStatusRejected: status === LoadingStatus.Rejected,
    }
  ));

export {
  orderSelector,
  orderPostingStatusSelector
};
