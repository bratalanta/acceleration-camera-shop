import { LoadingStatus } from '../../../const';
import { postCouponAction } from '../../api-actions/coupons-api/coupons-api';
import { couponsSlice, TCouponsSliceState } from './coupons-slice';

describe('Reducer: couponsSlice', () => {
  let state: TCouponsSliceState;

  beforeEach(() => {
    state = {
      discount: 0,
      couponPostingStatus: LoadingStatus.Idle,
      currentCoupon: null
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(couponsSlice.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('postCouponAction test', () => {
    it('should set discount and update loading status to Fulfilled if postCouponAction is fulfilled',
      () => {
        expect(couponsSlice.reducer(state, {
          payload: 15,
          type: postCouponAction.fulfilled.type
        }))
          .toEqual({
            ...state,
            discount: 0.15,
            couponPostingStatus: LoadingStatus.Fulfilled,
          });
      });

    it('should update loading status to Pending if postCouponAction is pending',
      () => {
        expect(couponsSlice.reducer(state, {
          type: postCouponAction.pending.type
        }))
          .toEqual({
            ...state,
            couponPostingStatus: LoadingStatus.Pending,
          });
      });

    it('should update loading status to Rejected if postCouponAction is rejected',
      () => {
        expect(couponsSlice.reducer(state, {
          type: postCouponAction.rejected.type
        }))
          .toEqual({
            ...state,
            couponPostingStatus: LoadingStatus.Rejected,
          });
      });
  });
});
