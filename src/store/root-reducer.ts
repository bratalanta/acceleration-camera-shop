import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appSlice } from './slices/app-slice/app-slice';
import { basketSlice } from './slices/basket-slice/basket-slice';
import { camerasSlice } from './slices/cameras-slice/cameras-slice';
import { couponsSlice } from './slices/coupons-slice/coupons-slice';
import { ordersSlice } from './slices/orders-slice/orders-slice';
import { promoSlice } from './slices/promo-slice/promo-slice';
import { reviewsSlice } from './slices/reviews-slice/reviews-slice';

export const rootReducer = combineReducers({
  [NameSpace.Cameras]: camerasSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
  [NameSpace.Promo]: promoSlice.reducer,
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.Basket]: basketSlice.reducer,
  [NameSpace.Coupons]: couponsSlice.reducer,
  [NameSpace.Orders]: ordersSlice.reducer

});
