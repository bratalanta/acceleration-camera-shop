import { createSelector } from 'reselect';
import { LoadingStatus, NameSpace } from '../../../const';
import { State } from '../../../types/state';

const selectCameras = (state: State) => state[NameSpace.Cameras].cameras;

const selectCamera = (state: State) => state[NameSpace.Cameras].camera;
const selectCameraLoadingStatus = (state: State) => state[NameSpace.Cameras].cameraLoadingStatus;

const selectSimilarCameras = (state: State) => state[NameSpace.Cameras].similarCameras;


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

export {
  selectCamera,
  selectCameras,
  selectSimilarCameras,
  cameraLoadingStatusSelector
};