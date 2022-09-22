import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { TCamera } from '../../types/camera';
import { APIRoute } from '../../const';

const fetchCamerasAction = createAsyncThunk<TCamera[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'cameras/fetchCameras',
  async (_, {extra: api}) => {
    const {data} = await api.get<TCamera[]>(APIRoute.Cameras);

    return data;
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
