import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {APIRoute, DEFAULT_PAGE, MAX_PRODUCTS_COUNT_PER_PAGE, QueryParameter} from '../../../const';
import { makeFakeCamera } from '../../../tests/mocks/mocks';
import { fetchCameraAction, fetchCamerasAction, fetchLikelyCamerasAction, fetchSimilarCamerasAction } from './cameras-api';
import { createAPI } from '../../../services/api';
import { State } from '../../../types/state';

const mockCameras = new Array(MAX_PRODUCTS_COUNT_PER_PAGE).fill(null)
  .map(() => makeFakeCamera());
const mockCamera = makeFakeCamera();
const defaultPage = Number(DEFAULT_PAGE);
const mockID = 1;

describe('Cameras API', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch fetchCamerasAction when GET /cameras', async () => {
    mockAPI
      .onGet(APIRoute.Cameras, {
        params: {
          [QueryParameter.Limit]: MAX_PRODUCTS_COUNT_PER_PAGE,
          [QueryParameter.Page]: defaultPage,
          [QueryParameter.Sort]: null,
          [QueryParameter.Order]: null,
          [QueryParameter.Category]: null,
          [QueryParameter.Level]: null,
          [QueryParameter.PriceCeil]: null,
          [QueryParameter.PriceFloor]: null,
          [QueryParameter.Type]: null,
        }
      })
      .reply(200, mockCameras, {
        'x-total-count': 10
      });

    const store = mockStore();

    await store.dispatch(fetchCamerasAction({
      limit: MAX_PRODUCTS_COUNT_PER_PAGE,
      currentPage: defaultPage,
      queryParams: {
        sortType: null,
        sortOrder: null,
        category: null,
        level: null,
        priceCeil: null,
        priceFloor: null,
        type: null
      }
    }));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCamerasAction.pending.type,
      fetchCamerasAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchSimilarCamerasAction when GET /cameras/id/similar', async () => {
    mockAPI
      .onGet(`${APIRoute.Cameras}/${mockID}${APIRoute.Similar}`)
      .reply(200, mockCameras);

    const store = mockStore();

    await store.dispatch(fetchSimilarCamerasAction(mockID));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchSimilarCamerasAction.pending.type,
      fetchSimilarCamerasAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchCameraAction when GET /cameras/id', async () => {
    mockAPI
      .onGet(`${APIRoute.Cameras}/${mockID}`)
      .reply(200, mockCamera);

    const store = mockStore();

    await store.dispatch(fetchCameraAction(mockID));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCameraAction.pending.type,
      fetchCameraAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchLikelyCamerasAction when GET /cameras/?name_like', async () => {
    mockAPI
      .onGet(APIRoute.Cameras, {
        params: {
          [QueryParameter.NameLike]: mockCamera.name
        }
      })
      .reply(200, [mockCamera.name]);

    const store = mockStore();

    await store.dispatch(fetchLikelyCamerasAction(mockCamera.name));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchLikelyCamerasAction.pending.type,
      fetchLikelyCamerasAction.fulfilled.type
    ]);
  });
});

