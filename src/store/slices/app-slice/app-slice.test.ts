import { DEFAULT_PAGE } from '../../../const';
import { appSlice, setCurrentCatalogPath, TAppSliceState, TBasketModal, TProductModal } from './app-slice';

describe('Reducer: appSlice', () => {
  let state: TAppSliceState;

  beforeEach(() => {
    state = {
      currentCatalogPath: {
        currentPage: 1
      },
      currentReviewPage: Number(DEFAULT_PAGE) + 1,
      productActiveModal: {} as TProductModal,
      reviewActiveModal: null,
      basketActiveModal: {} as TBasketModal
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(appSlice.reducer(state, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should set current catalog page and search', () => {
    expect(appSlice.reducer(state, setCurrentCatalogPath({
      currentPage: 3,
      search: '?_order=asc'
    })))
      .toEqual({...state, currentCatalogPath: {
        currentPage: 3,
        search: '?_order=asc'
      }});
  });
});
