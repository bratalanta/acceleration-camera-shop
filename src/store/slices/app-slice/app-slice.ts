import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';

type TInitialState = {
  currentCatalogPage: number;
}

const initialState: TInitialState = {
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
