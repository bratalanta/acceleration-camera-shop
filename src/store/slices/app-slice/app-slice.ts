import { createSlice } from '@reduxjs/toolkit';
import { ProductModal, NameSpace, REVIEW_DEFAULT_PAGE, PostReviewModal, BasketModal } from '../../../const';
import { TCurrentCatalogPath } from '../../../types/app';
import { TCamera } from '../../../types/camera';
import { postOrderAction } from '../../api-actions/orders-api/orders-api';
import { postReviewAction } from '../../api-actions/reviews-api/reviews-api';

type TBasketModal = {
  activeModal: BasketModal | null;
  productDetails: TCamera
}

type TProductModal = {
  activeModal: ProductModal | null;
  productDetails: TCamera
}

type TAppSliceState = {
  currentCatalogPath: TCurrentCatalogPath;
  currentReviewPage: number;
  productActiveModal: TProductModal;
  reviewActiveModal: null | PostReviewModal;
  basketActiveModal: TBasketModal;
}

const initialState: TAppSliceState = {
  currentCatalogPath: {} as TCurrentCatalogPath,
  productActiveModal: {} as TProductModal,
  reviewActiveModal: null,
  currentReviewPage: REVIEW_DEFAULT_PAGE,
  basketActiveModal: {} as TBasketModal
};

const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setCurrentCatalogPath: (state, action) => {
      state.currentCatalogPath = action.payload;
    },
    setCurrentReviewPage: (state, action) => {
      state.currentReviewPage = action.payload;
    },
    setProductActiveModal: (state, action) => {
      state.productActiveModal = action.payload;
    },
    setReviewActiveModal: (state, action) => {
      state.reviewActiveModal = action.payload;
    },
    setBasketActiveModal: (state, action) => {
      state.basketActiveModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postReviewAction.fulfilled, (state) => {
        state.reviewActiveModal = PostReviewModal.Success;
      })
      .addCase(postOrderAction.fulfilled, (state) => {
        state.basketActiveModal = {
          activeModal: BasketModal.Sucess,
          productDetails: {} as TCamera
        };
      })
      .addCase(postOrderAction.rejected, (state) => {
        state.basketActiveModal = {
          activeModal: BasketModal.Fail,
          productDetails: {} as TCamera
        };
      });
  }
});

export {
  appSlice
};

export const {
  setCurrentCatalogPath,
  setProductActiveModal,
  setCurrentReviewPage,
  setReviewActiveModal,
  setBasketActiveModal
} = appSlice.actions;

export type {
  TBasketModal,
  TAppSliceState,
  TProductModal
};
