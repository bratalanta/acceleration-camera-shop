import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';

type TInitialState = {
  isReviewModalOpened: boolean;
}

const initialState: TInitialState = {
  isReviewModalOpened: false,
};

const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setIsReviewModalOpened: (state, action) => {
      state.isReviewModalOpened = action.payload;
    }
  },
});

export {
  appSlice
};

export const {
  setIsReviewModalOpened
} = appSlice.actions;
