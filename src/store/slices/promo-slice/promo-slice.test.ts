import { makeFakePromo } from '../../../tests/mocks/mocks';
import { TPromo } from '../../../types/promo';
import { fetchPromoAction } from '../../api-actions/promo-api/promo-api';
import { promoSlice, TPromoSliceState } from './promo-slice';

const mockPromo = makeFakePromo();

describe('Reducer: promoSlice', () => {
  let state: TPromoSliceState;

  beforeEach(() => {
    state = {
      promo: {} as TPromo
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(promoSlice.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchPromoAction test', () => {
    it('should set promo if fetchPromoAction is fulfilled',
      () => {
        expect(promoSlice.reducer(state, {
          payload: mockPromo,
          type: fetchPromoAction.fulfilled.type
        }))
          .toEqual({
            promo: mockPromo
          });
      });
  });
});
