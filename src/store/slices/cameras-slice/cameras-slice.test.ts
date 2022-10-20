import { LoadingStatus } from '../../../const';
import { makeFakeCamera } from '../../../tests/mocks/mocks';
import { TCamera, TCamerasPriceRange } from '../../../types/camera';
import { fetchCameraAction, fetchCamerasAction, fetchLikelyCamerasAction, fetchMinMaxCameraPricesAction, fetchSimilarCamerasAction } from '../../api-actions/cameras-api/cameras-api';
import { camerasSlice, TCamerasSliceState } from './cameras-slice';

const mockCameras = [makeFakeCamera(), makeFakeCamera()];
const mockCamera = makeFakeCamera();
const mockCamerasTotalCount = 10;
const mockLikelyCameras = [{
  id: mockCamera.id,
  name: mockCamera.name
}];
const mockCamerasPriceRange: TCamerasPriceRange = {
  maxPrice: 1000,
  minPrice: 0
};

describe('Reducer: camerasSlice', () => {
  let state: TCamerasSliceState;

  beforeEach(() => {
    state = {
      likelyCameras: [],
      cameras: [],
      camera: {} as TCamera,
      similarCameras: [],
      camerasLoadingStatus: LoadingStatus.Idle,
      cameraLoadingStatus: LoadingStatus.Idle,
      camerasTotalCount: 0,
      camerasPriceRange: {}
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(camerasSlice.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchCamerasAction test', () => {
    it('should set cameras with given cameras, set camerasTotalCount with given dataTotalCount, update camerasLoadingStatus to fulfilled if fetchCamerasAction is fulfilled',
      () => {
        expect(camerasSlice.reducer(state, {
          payload: {
            data: mockCameras,
            dataTotalCount: mockCamerasTotalCount
          },
          type: fetchCamerasAction.fulfilled.type
        }))
          .toEqual({
            ...state,
            cameras: mockCameras,
            camerasTotalCount: mockCamerasTotalCount,
            camerasLoadingStatus: LoadingStatus.Fulfilled
          });
      });

    it('should update camerasLoadingStatus to pending if fetchCamerasAction is pending',
      () => {
        expect(camerasSlice.reducer(state, {
          type: fetchCamerasAction.pending.type
        }))
          .toEqual({
            ...state,
            camerasLoadingStatus: LoadingStatus.Pending
          });
      });

    it('should update camerasLoadingStatus to rejected if fetchCamerasAction is rejected',
      () => {
        expect(camerasSlice.reducer(state, {
          type: fetchCamerasAction.rejected.type
        }))
          .toEqual({
            ...state,
            camerasLoadingStatus: LoadingStatus.Rejected
          });
      });
  });

  describe('fetchCameraAction test', () => {
    it('should update cameraLoadingStatus to "pending" if fetchCameraAction is pending', () => {
      expect(camerasSlice.reducer(state, {type: fetchCameraAction.pending.type}))
        .toEqual({
          ...state,
          cameraLoadingStatus: LoadingStatus.Pending
        });
    });

    it('should update cameraLoadingStatus to "rejected" if fetchCameraAction is rejected', () => {
      expect(camerasSlice.reducer(state, {type: fetchCameraAction.rejected.type}))
        .toEqual({
          ...state,
          cameraLoadingStatus: LoadingStatus.Rejected
        });
    });

    it('should set camera with given camera and update postingStatus to "fulfilled" if fetchCameraAction is fulfilled', () => {
      expect(camerasSlice.reducer(state, {
        payload: mockCamera,
        type: fetchCameraAction.fulfilled.type
      }))
        .toEqual({
          ...state,
          camera: mockCamera,
          cameraLoadingStatus: LoadingStatus.Fulfilled
        });
    });
  });

  describe('fetchSimilarCamerasAction test', () => {
    it('should set similarCameras with given cameras if fetchSimilarCamerasAction is fulfilled', () => {
      expect(camerasSlice.reducer(state, {
        payload: mockCameras,
        type: fetchSimilarCamerasAction.fulfilled.type
      }))
        .toEqual({
          ...state,
          similarCameras: mockCameras
        });
    });
  });

  describe('fetchLikelyCamerasAction test', () => {
    it('should set likelyCameras with given cameras if fetchLikelyCamerasAction is fulfilled', () => {
      expect(camerasSlice.reducer(state, {
        payload: mockLikelyCameras,
        type: fetchLikelyCamerasAction.fulfilled.type
      }))
        .toEqual({
          ...state,
          likelyCameras: mockLikelyCameras
        });
    });
  });

  describe('fetchMinMaxCameraPricesAction test', () => {
    it('should set camerasPriceRange with given cameras if fetchMinMaxCameraPricesAction is fulfilled', () => {
      expect(camerasSlice.reducer(state, {
        payload: mockCamerasPriceRange,
        type: fetchMinMaxCameraPricesAction.fulfilled.type
      }))
        .toEqual({
          ...state,
          camerasPriceRange: mockCamerasPriceRange
        });
    });
  });
});

