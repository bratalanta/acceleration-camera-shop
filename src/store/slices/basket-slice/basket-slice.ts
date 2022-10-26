import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { TCamera } from '../../../types/camera';

type TBasketProduct = {
  product: TCamera,
  productCount: number
}

type TBasketSliceState = {
  basketProducts: TBasketProduct[],
}

const initialState: TBasketSliceState = {
  basketProducts: [],
};

const basketSlice = createSlice({
  name: NameSpace.Basket,
  initialState,
  reducers: {
    addBasketProduct: (state, {payload}) => {
      const productIndex = state.basketProducts.findIndex(({product}) => product.id === payload.id);

      if (productIndex >= 0) {
        state.basketProducts[productIndex].productCount++;

        return;
      }

      state.basketProducts.push({
        product: payload,
        productCount: 1
      });
    },
    removeBasketProduct: (state, {payload}) => {
      state.basketProducts = state.basketProducts.filter(
        ({product}) => product.id !== payload.id
      );
    },
    changeBasketProductCount: (state, {payload}) => {
      const {value, product: payloadProduct} = payload;

      state.basketProducts.map((basketProduct) => {
        const {product} = basketProduct;

        if (product.id === payloadProduct.id) {
          basketProduct.productCount += value;
        }

        return basketProduct;
      });
    },
    replaceBasketProductCount: (state, {payload}) => {
      const {value, product: payloadProduct} = payload;

      state.basketProducts.map((basketProduct) => {
        const {product} = basketProduct;

        if (product.id === payloadProduct.id) {
          basketProduct.productCount = value;
        }

        return basketProduct;
      });
    }
  }
});

export {
  basketSlice
};

export const {
  addBasketProduct,
  removeBasketProduct,
  changeBasketProductCount,
  replaceBasketProductCount,
} = basketSlice.actions;

export type {
  TBasketSliceState,
};
