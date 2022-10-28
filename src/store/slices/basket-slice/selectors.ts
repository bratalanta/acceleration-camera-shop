import { createSelector } from 'reselect';
import { NameSpace } from '../../../const';
import { State } from '../../../types/state';
import { couponPostingStatusSelector } from '../coupons-slice/selectors';

const selectBasketProducts = (state: State) => state[NameSpace.Basket].basketProducts;
const selectDiscountPercent = (state: State) => state[NameSpace.Coupons].discount;

const basketProductsTotalCountSelector = createSelector(
  [
    selectBasketProducts,
  ], (products) => products.reduce(
    (acc, {productCount}) => acc + productCount, 0)
);

const basketTotalPriceSelector = createSelector(
  [
    selectBasketProducts,
  ], (products) => products.reduce(
    (acc, {product, productCount}) => acc + product.price * productCount, 0)
);

const basketDiscountPriceSelector = createSelector(
  [
    basketTotalPriceSelector,
    selectDiscountPercent,
    couponPostingStatusSelector
  ], (totalPrice, discount) => totalPrice * discount
);

const basketPriceToPaySelector = createSelector(
  [
    basketTotalPriceSelector,
    basketDiscountPriceSelector
  ], (totalPrice, discountPrice) => totalPrice - discountPrice
);

export {
  selectBasketProducts,
  basketTotalPriceSelector,
  basketDiscountPriceSelector,
  basketPriceToPaySelector,
  basketProductsTotalCountSelector,
};
