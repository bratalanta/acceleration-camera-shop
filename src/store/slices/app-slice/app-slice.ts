import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';

type TInitialState = {
  isReviewModalOpened: boolean;
  currentCatalogPage: string;
}

const initialState: TInitialState = {
  isReviewModalOpened: false,
  currentCatalogPage: ''
};

const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setIsReviewModalOpened: (state, action) => {
      state.isReviewModalOpened = action.payload;
    },
    setCurrentCatalogPage: (state, action) => {
      state.currentCatalogPage = action.payload;
    }
  },
});

export {
  appSlice
};

export const {
  setIsReviewModalOpened,
  setCurrentCatalogPage
} = appSlice.actions;
