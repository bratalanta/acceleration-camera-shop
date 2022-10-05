import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';

type TAppSliceState = {
  currentCatalogPage: number;
}

const initialState: TAppSliceState = {
  currentCatalogPage: 0
};

const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setCurrentCatalogPage: (state, action) => {
      state.currentCatalogPage = action.payload;
    }
  },
});

export {
  appSlice
};

export const {
  setCurrentCatalogPage
} = appSlice.actions;

export type {
  TAppSliceState
};
