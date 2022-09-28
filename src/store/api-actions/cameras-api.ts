import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { TCamera, TFetchCamerasActionPayload, TFetchCamerasActionReturnedData } from '../../types/camera';
import { APIRoute } from '../../const';
import { toast } from 'react-toastify';

const fetchCamerasAction = createAsyncThunk<TFetchCamerasActionReturnedData, TFetchCamerasActionPayload, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'cameras/fetchCameras',
  async ({limit, page}, {extra: api}) => {
    const response = await api.get<TCamera[]>(APIRoute.Cameras, {
      params: {
        _limit: limit,
        _page: page
      }
    });

    return {
      data: response.data,
      dataTotalCount: Number(response.headers['x-total-count'])
    };
  }
);

const fetchCameraAction = createAsyncThunk<TCamera, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'cameras/fetchCamera',
  async (id, {extra: api}) => {
    const {data} = await api.get<TCamera>(`${APIRoute.Cameras}/${id}`);

    return data;
  }
);

const fetchSimilarCamerasAction = createAsyncThunk<TCamera[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'cameras/fetchSimilarCameras',
  async (id, {extra: api}) => {
    try {
      const {data} = await api.get<TCamera[]>(`${APIRoute.Cameras}/${id}${APIRoute.Similar}`);

      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.warn('Не удалось загрузить похожие товары');
      }
      throw err;
    }
  }
);

export {
  fetchCameraAction,
  fetchCamerasAction,
  fetchSimilarCamerasAction
};
