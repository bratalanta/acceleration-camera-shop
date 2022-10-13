import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../../types/state';
import { TCamera, TFetchCamerasActionPayload, TFetchCamerasActionReturnedData, TFetchLikelyCamerasActionReturnedData } from '../../../types/camera';
import { APIRoute, AppRoute, QueryParameter, SortType } from '../../../const';
import { toast } from 'react-toastify';
import browserHistory from '../../../browser-history';
import { StatusCodes } from 'http-status-codes';

const fetchCamerasAction = createAsyncThunk<TFetchCamerasActionReturnedData, TFetchCamerasActionPayload, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'cameras/fetchCameras',
  async ({limit, page, sort, order}, {extra: api}) => {
    const response = await api.get<TCamera[]>(APIRoute.Cameras, {
      params: {
        [QueryParameter.Limit]: limit,
        [QueryParameter.Page]: page,
        [QueryParameter.Sort]: (sort ? sort : '') || (order ? SortType.Price : ''),
        [QueryParameter.Order]: order ? order : '',
      }
    });

    return {
      data: response.data,
      dataTotalCount: Number(response.headers['x-total-count'])
    };
  }
);

const fetchLikelyCamerasAction = createAsyncThunk<TFetchLikelyCamerasActionReturnedData[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'cameras/fetchLikelyCameras',
  async (input, {extra: api}) => {
    try {
      const {data} = await api.get<TCamera[]>(APIRoute.Cameras, {
        params: {
          [QueryParameter.NameLike]: input
        }
      });

      return data.map(({name, id}) => ({name, id}));
    } catch (err) {
      toast.warn('Не удалось загрузить подходящие товары');

      throw err;
    }
  }
);

const fetchCameraAction = createAsyncThunk<TCamera, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'cameras/fetchCamera',
  async (id, {extra: api}) => {
    try {
      const {data} = await api.get<TCamera>(`${APIRoute.Cameras}/${id}`);

      return data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        if (err.response.status === StatusCodes.NOT_FOUND) {
          browserHistory.push({
            pathname: `/${AppRoute.NotFound}`
          });
        }
      }

      throw err;
    }
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
  fetchSimilarCamerasAction,
  fetchLikelyCamerasAction
};
