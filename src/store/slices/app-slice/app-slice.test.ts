import { DEFAULT_PAGE } from '../../../const';
import { appSlice, setCurrentCatalogPage, TAppSliceState } from './app-slice';

describe('Reducer: appSlice', () => {
  let state: TAppSliceState;

  beforeEach(() => {
    state = {
      currentCatalogPage: 0,
      currentReviewPage: Number(DEFAULT_PAGE) + 1,
      activeModal: null
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(appSlice.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should set current catalog page', () => {
    expect(appSlice.reducer(state, setCurrentCatalogPage(4)))
      .toEqual({...state, currentCatalogPage: 4});
  });
});
