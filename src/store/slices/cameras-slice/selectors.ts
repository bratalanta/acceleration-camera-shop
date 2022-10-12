import { createSelector } from 'reselect';
import { LoadingStatus, NameSpace } from '../../../const';
import { State } from '../../../types/state';

const selectCameras = (state: State) => state[NameSpace.Cameras].cameras;
const selectCamerasLoadingStatus = (state: State) => state[NameSpace.Cameras].camerasLoadingStatus;
const selectCamerasTotalCount = (state: State) => state[NameSpace.Cameras].camerasTotalCount;


const selectCamera = (state: State) => state[NameSpace.Cameras].camera;
const selectCameraLoadingStatus = (state: State) => state[NameSpace.Cameras].cameraLoadingStatus;

const selectSimilarCameras = (state: State) => state[NameSpace.Cameras].similarCameras;

const selectLikelyCameras = (state: State) => state[NameSpace.Cameras].likelyCameras;

const cameraLoadingStatusSelector = createSelector(
  [
    selectCameraLoadingStatus,
  ],
  (status) => (
    {
      isCameraLoadingStatusPending: [LoadingStatus.Pending, LoadingStatus.Idle].includes(status),
      isCameraLoadingStatusRejected: status === LoadingStatus.Rejected,
    }
  ));

const camerasLoadingStatusSelector = createSelector(
  [
    selectCamerasLoadingStatus,
  ],
  (status) => (
    {
      isCamerasLoadingStatusPending: [LoadingStatus.Pending, LoadingStatus.Idle].includes(status),
      isCamerasLoadingStatusRejected: status === LoadingStatus.Rejected,
    }
  ));

export {
  selectCamera,
  selectCameras,
  selectSimilarCameras,
  cameraLoadingStatusSelector,
  selectCamerasTotalCount,
  camerasLoadingStatusSelector,
  selectLikelyCameras
};
