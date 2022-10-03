import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../../types/state';
import { APIRoute } from '../../../const';
import { TPromo } from '../../../types/promo';
import { toast } from 'react-toastify';

const fetchPromoAction = createAsyncThunk<TPromo, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'promo/fetchPromo',
  async (_, {extra: api}) => {
    try {
      const {data} = await api.get<TPromo>(APIRoute.Promo);

      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.warn('Не удалось загрузить промо-товар');
      }
      throw err;
    }
  }
);

export {
  fetchPromoAction
};
