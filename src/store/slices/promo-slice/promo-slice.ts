import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { TPromo } from '../../../types/promo';
import { fetchPromoAction } from '../../api-actions/promo-api/promo-api';

type TPromoSliceState = {
  promo: TPromo;
}

const initialState: TPromoSliceState = {
  promo: {} as TPromo,
};

const promoSlice = createSlice({
  name: NameSpace.Cameras,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
      });
  }
});

export {
  promoSlice
};

export type {
  TPromoSliceState
};

