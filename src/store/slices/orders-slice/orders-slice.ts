import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from '../../../const';
import { postOrderAction } from '../../api-actions/orders-api/orders-api';

type TOrdersSliceState = {
  orderPostingStatus: LoadingStatus;
}

const initialState: TOrdersSliceState = {
  orderPostingStatus: LoadingStatus.Idle,
};

const ordersSlice = createSlice({
  name: NameSpace.Orders,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postOrderAction.fulfilled, (state) => {
        state.orderPostingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(postOrderAction.pending, (state) => {
        state.orderPostingStatus = LoadingStatus.Pending;
      })
      .addCase(postOrderAction.rejected, (state) => {
        state.orderPostingStatus = LoadingStatus.Rejected;
      });
  }
});

export {
  ordersSlice
};

export type {
  TOrdersSliceState
};

