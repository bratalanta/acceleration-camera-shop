import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { camerasSlice } from './slices/cameras-slice/cameras-slice';
import { promoSlice } from './slices/promo-slice/promo-slice';
import { reviewsSlice } from './slices/reviews-slice/reviews-slice';

export const rootReducer = combineReducers({
  [NameSpace.Cameras]: camerasSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.Promo]: promoSlice.reducer
});
