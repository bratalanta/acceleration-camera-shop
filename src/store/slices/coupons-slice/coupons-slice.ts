import { createSlice } from '@reduxjs/toolkit';
import { AvailableCoupon, LoadingStatus, NameSpace } from '../../../const';
import { postCouponAction } from '../../api-actions/coupons-api/coupons-api';

type TCouponsSliceState = {
  discount: number;
  couponPostingStatus: LoadingStatus;
  currentCoupon: null | AvailableCoupon
}

const initialState: TCouponsSliceState = {
  discount: 0,
  couponPostingStatus: LoadingStatus.Idle,
  currentCoupon: null
};

const couponsSlice = createSlice({
  name: NameSpace.Coupons,
  initialState,
  reducers: {
    setCurrentCoupon: (state, {payload}) => {
      state.currentCoupon = payload;
    },
    resetCouponPostingStatus: (state) => {
      state.couponPostingStatus = LoadingStatus.Idle;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCouponAction.fulfilled, (state, action) => {
        state.discount = action.payload / 100;
        state.couponPostingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(postCouponAction.pending, (state) => {
        state.couponPostingStatus = LoadingStatus.Pending;
      })
      .addCase(postCouponAction.rejected, (state) => {
        state.discount = 0;
        state.couponPostingStatus = LoadingStatus.Rejected;
      });
  }
});

export {
  couponsSlice
};

export type {
  TCouponsSliceState
};

export const {
  resetCouponPostingStatus,
  setCurrentCoupon
} = couponsSlice.actions;
