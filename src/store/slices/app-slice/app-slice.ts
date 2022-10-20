import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_PAGE, Modal, NameSpace } from '../../../const';
import { TCurrentCatalogPath } from '../../../types/app';

type TAppSliceState = {
  currentCatalogPath: TCurrentCatalogPath;
  currentReviewPage: number;
  activeModal: null | Modal;
}

const initialState: TAppSliceState = {
  currentCatalogPath: {} as TCurrentCatalogPath,
  activeModal: null,
  currentReviewPage: Number(DEFAULT_PAGE) + 1,
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
