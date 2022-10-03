import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {APIRoute} from '../../../const';
import { makeFakeCamera } from '../../../tests/mocks/mocks';
import { createAPI } from '../../../services/api';
import { State } from '../../../types/state';
import { fetchPromoAction } from './promo-api';

const mockCamera = makeFakeCamera();

describe('Promo API', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch fetchPromoAction when GET /promo', async () => {
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, mockCamera);

    const store = mockStore();

    await store.dispatch(fetchPromoAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchPromoAction.pending.type,
      fetchPromoAction.fulfilled.type
    ]);
  });
});

