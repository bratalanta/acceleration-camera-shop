import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_PAGE, Modal, NameSpace } from '../../../const';

type TAppSliceState = {
  currentCatalogPage: number;
  currentReviewPage: number;
  activeModal: null | Modal
}

const initialState: TAppSliceState = {
  currentCatalogPage: 0,
  activeModal: null,
  currentReviewPage: Number(DEFAULT_PAGE) + 1,

};

const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setCurrentCatalogPage: (state, action) => {
      state.currentCatalogPage = action.payload;
    },
    setCurrentReviewPage: (state, action) => {
      state.currentReviewPage = action.payload;
    },
    setActiveModal: (state, action) => {
      state.activeModal = action.payload;
    }
  },
});

export {
  appSlice
};

export const {
  setCurrentCatalogPage,
  setActiveModal,
  setCurrentReviewPage
} = appSlice.actions;

export type {
  TAppSliceState
};
