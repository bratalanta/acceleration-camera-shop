import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../../types/state';
import { APIRoute } from '../../../const';
import { TPostOrderActionPayload } from '../../../types/order';

const postOrderAction = createAsyncThunk<void, TPostOrderActionPayload, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'orders/postOrder',
  async (order, {extra: api}) => {
    await api.post(APIRoute.Orders, order);
  }
);

export {
  postOrderAction
};
