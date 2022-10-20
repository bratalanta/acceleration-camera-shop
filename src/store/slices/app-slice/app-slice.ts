import { createSlice } from '@reduxjs/toolkit';
import { Modal, NameSpace, REVIEW_DEFAULT_PAGE } from '../../../const';
import { TCurrentCatalogPath } from '../../../types/app';

type TAppSliceState = {
  currentCatalogPath: TCurrentCatalogPath;
  currentReviewPage: number;
  activeModal: null | Modal;
}

const initialState: TAppSliceState = {
  currentCatalogPath: {} as TCurrentCatalogPath,
  activeModal: null,
  currentReviewPage: REVIEW_DEFAULT_PAGE,
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
    setActiveModal: (state, action) => {
      state.activeModal = action.payload;
    },
  },
});

export {
  appSlice
};

export const {
  setCurrentCatalogPath,
  setActiveModal,
  setCurrentReviewPage,
} = appSlice.actions;

export type {
  TAppSliceState
};
