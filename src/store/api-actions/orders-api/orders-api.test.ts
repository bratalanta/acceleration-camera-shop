import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {APIRoute} from '../../../const';
import { createAPI } from '../../../services/api';
import { State } from '../../../types/state';
import { postOrderAction } from './orders-api';
import { makeFakeOrder } from '../../../tests/mocks/mocks';

const mockOrder = makeFakeOrder();

describe('Orders API', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch postOrderAction when POST /orders', async () => {
    mockAPI
      .onPost(APIRoute.Orders, mockOrder)
      .reply(200);

    const store = mockStore();

    await store.dispatch(postOrderAction(mockOrder));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      postOrderAction.pending.type,
      postOrderAction.fulfilled.type
    ]);
  });
});

