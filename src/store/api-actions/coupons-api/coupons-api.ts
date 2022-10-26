import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../../types/state';
import { APIRoute, AvailableCoupon } from '../../../const';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';

const postCouponAction = createAsyncThunk<number, AvailableCoupon, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'coupons/postCoupon',
  async (coupon, {extra: api}) => {
    try {
      const {data} = await api.post(APIRoute.Coupons, {coupon});

      return data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === StatusCodes.NOT_FOUND) {
        toast.warn('Не удалось получить ответ на валидность купона');
      }

      throw err;
    }
  }
);

export {
  postCouponAction
};
