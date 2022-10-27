import { Operation, PurchaseProductCount } from '../../../const';
import { makeFakeBasketProduct, makeFakeCamera } from '../../../tests/mocks/mocks';
import { addBasketProduct, basketSlice, changeBasketProductCount, removeBasketProduct, replaceBasketProductCount, TBasketSliceState } from './basket-slice';

const mockBasketProduct = makeFakeBasketProduct();
const mockCamera = makeFakeCamera();

describe('Reducer: basketSlice', () => {
  let state: TBasketSliceState;

  beforeEach(() => {
    state = {
      basketProducts: [mockBasketProduct]
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(basketSlice.reducer(state, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should add product to basket', () => {
    expect(basketSlice.reducer(state, addBasketProduct(mockCamera)))
      .toEqual({...state, basketProducts: [mockBasketProduct, {
        product: mockCamera,
        productCount: 1
      }]});
  });

  it('should remove product from basket', () => {
    expect(basketSlice.reducer(state, removeBasketProduct(mockBasketProduct.product)))
      .toEqual({...state, basketProducts: []});
  });

  it('should increase product count by one', () => {
    expect(basketSlice.reducer(state, changeBasketProductCount({
      value: Operation.Increase,
      product: mockBasketProduct.product
    })))
      .toEqual({...state, basketProducts: [{
        ...mockBasketProduct,
        productCount: 2
      }]});
  });

  it('should decrease product count by one', () => {
    expect(basketSlice.reducer(state, changeBasketProductCount({
      value: Operation.Decrease,
      product: mockBasketProduct.product
    })))
      .toEqual({...state, basketProducts: [{
        ...mockBasketProduct,
        productCount: 0
      }]});
  });

  it('should replace product count with given value', () => {
    expect(basketSlice.reducer(state, replaceBasketProductCount({
      value: PurchaseProductCount.MaxCount,
      product: mockBasketProduct.product
    })))
      .toEqual({...state, basketProducts: [{
        ...mockBasketProduct,
        productCount: PurchaseProductCount.MaxCount
      }]});
  });
});
