import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {APIRoute, AvailableCoupon} from '../../../const';
import { createAPI } from '../../../services/api';
import { State } from '../../../types/state';
import { postCouponAction } from './coupons-api';

describe('Coupons API', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch postCouponAction when POST /coupons', async () => {
    mockAPI
      .onPost(APIRoute.Coupons, {coupon: AvailableCoupon['camera-333']})
      .reply(200, 15);

    const store = mockStore();

    await store.dispatch(postCouponAction(AvailableCoupon['camera-333']));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      postCouponAction.pending.type,
      postCouponAction.fulfilled.type
    ]);
  });
});

