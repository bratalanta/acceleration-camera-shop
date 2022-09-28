import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from '../../../const';
import {TReview} from '../../../types/review';
import { fetchReviewsAction, postReviewAction } from '../../api-actions/reviews-api';

type TInitialState = {
  reviews: TReview[];
  reviewPostingStatus: LoadingStatus;
  reviewsTotalCount: number;
}

const initialState: TInitialState = {
  reviews: [],
  reviewPostingStatus: LoadingStatus.Idle,
  reviewsTotalCount: 0
};

const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    clearReviews: (state) => {
      state.reviews = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviewsTotalCount = action.payload.dataTotalCount;
        state.reviews.push(...action.payload.data);
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviewPostingStatus = LoadingStatus.Fulfilled;
        state.reviews.push(action.payload);
      })
      .addCase(postReviewAction.pending, (state) => {
        state.reviewPostingStatus = LoadingStatus.Pending;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.reviewPostingStatus = LoadingStatus.Rejected;
      });
  }
});

export const {
  clearReviews
} = reviewsSlice.actions;

export {
  reviewsSlice
};
