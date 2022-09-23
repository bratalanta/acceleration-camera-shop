import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { APIRoute } from '../../const';
import { TPromo } from '../../types/promo';

const fetchPromoAction = createAsyncThunk<TPromo, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'promo/fetchPromo',
  async (_, {extra: api}) => {
    const {data} = await api.get<TPromo>(APIRoute.Promo);

    return data;
  }
);

export {
  fetchPromoAction
};
