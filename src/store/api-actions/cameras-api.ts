import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, AxiosResponse } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { TCamera, TFetchCamerasActionPayload } from '../../types/camera';
import { APIRoute } from '../../const';

const fetchCamerasAction = createAsyncThunk<AxiosResponse, TFetchCamerasActionPayload, {
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

    return response;
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
    const {data} = await api.get<TCamera[]>(`${APIRoute.Cameras}/${id}${APIRoute.Similar}`);

    return data;
  }
);

export {
  fetchCameraAction,
  fetchCamerasAction,
  fetchSimilarCamerasAction
};
