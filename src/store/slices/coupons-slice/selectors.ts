import { createSelector } from 'reselect';
import { LoadingStatus, NameSpace } from '../../../const';
import { State } from '../../../types/state';

const selectCouponPostingStatus = (state: State) => state[NameSpace.Coupons].couponPostingStatus;
const selectCurrentCoupon = (state: State) => state[NameSpace.Coupons].currentCoupon;

const couponPostingStatusSelector = createSelector(
  [
    selectCouponPostingStatus,
  ],
  (status) => (
    {
      isCouponPostingStatusFulfilled: status === LoadingStatus.Fulfilled,
      isCouponPostingStatusPending: status === LoadingStatus.Pending,
      isCouponPostingStatusRejected: status === LoadingStatus.Rejected,
    }
  ));

export {
  couponPostingStatusSelector,
  selectCurrentCoupon
};
