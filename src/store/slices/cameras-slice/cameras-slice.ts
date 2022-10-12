import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from '../../../const';
import { TCamera, TLikelyCamera } from '../../../types/camera';
import { fetchCameraAction, fetchCamerasAction, fetchLikelyCamerasAction, fetchSimilarCamerasAction } from '../../api-actions/cameras-api/cameras-api';

type TCamerasSliceState = {
  cameras: TCamera[];
  camera: TCamera;
  similarCameras: TCamera[];
  likelyCameras: TLikelyCamera[];
  camerasLoadingStatus: LoadingStatus;
  cameraLoadingStatus: LoadingStatus;
  camerasTotalCount: number;
}

const initialState: TCamerasSliceState = {
  cameras: [],
  camera: {} as TCamera,
  similarCameras: [],
  likelyCameras: [],
  camerasLoadingStatus: LoadingStatus.Idle,
  cameraLoadingStatus: LoadingStatus.Idle,
  camerasTotalCount: 0,
};

const camerasSlice = createSlice({
  name: NameSpace.Cameras,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamerasAction.pending, (state) => {
        state.camerasLoadingStatus = LoadingStatus.Pending;
      })
      .addCase(fetchCamerasAction.fulfilled, (state, action) => {
        state.cameras = action.payload.data;
        state.camerasTotalCount = action.payload.dataTotalCount;
        state.camerasLoadingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(fetchCamerasAction.rejected, (state) => {
        state.camerasLoadingStatus = LoadingStatus.Rejected;
      })
      .addCase(fetchCameraAction.pending, (state) => {
        state.cameraLoadingStatus = LoadingStatus.Pending;
      })
      .addCase(fetchCameraAction.fulfilled, (state, action) => {
        state.camera = action.payload;
        state.cameraLoadingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(fetchCameraAction.rejected, (state) => {
        state.cameraLoadingStatus = LoadingStatus.Rejected;
      })
      .addCase(fetchSimilarCamerasAction.fulfilled, (state, action) => {
        state.similarCameras = action.payload;
      })
      .addCase(fetchLikelyCamerasAction.fulfilled, (state, action) => {
        state.likelyCameras = action.payload;
      });
  }
});

export {
  camerasSlice
};

export type {
  TCamerasSliceState
};
