import { LoadingStatus } from '../../../const';
import { postOrderAction } from '../../api-actions/orders-api/orders-api';
import { ordersSlice, TOrdersSliceState } from './orders-slice';

describe('Reducer: ordersSlice', () => {
  let state: TOrdersSliceState;

  beforeEach(() => {
    state = {
      orderPostingStatus: LoadingStatus.Idle
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(ordersSlice.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('postOrderAction test', () => {
    it('should set orderPostingStatus to Fulfilled if postOrderAction is fulfilled',
      () => {
        expect(ordersSlice.reducer(state, {
          type: postOrderAction.fulfilled.type
        }))
          .toEqual({
            orderPostingStatus: LoadingStatus.Fulfilled
          });
      });

    it('should set orderPostingStatus to Pending if postOrderAction is pending',
      () => {
        expect(ordersSlice.reducer(state, {
          type: postOrderAction.pending.type
        }))
          .toEqual({
            orderPostingStatus: LoadingStatus.Pending
          });
      });

    it('should set orderPostingStatus to Rejected if postOrderAction is rejected',
      () => {
        expect(ordersSlice.reducer(state, {
          type: postOrderAction.rejected.type
        }))
          .toEqual({
            orderPostingStatus: LoadingStatus.Rejected
          });
      });
  });
});
