import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from '../../../const';
import {TReview} from '../../../types/review';
import { fetchReviewsAction, postReviewAction } from '../../api-actions/reviews-api/reviews-api';

type TReviewsSliceState = {
  reviews: TReview[];
  reviewPostingStatus: LoadingStatus;
  reviewsTotalCount: number;
  reviewsLoadingStatus: LoadingStatus;
}

const initialState: TReviewsSliceState = {
  reviews: [],
  reviewPostingStatus: LoadingStatus.Idle,
  reviewsTotalCount: 0,
  reviewsLoadingStatus: LoadingStatus.Idle
};

const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviewsLoadingStatus = LoadingStatus.Fulfilled;
        state.reviewsTotalCount = action.payload.dataTotalCount;

        if (action.payload.replace) {
          state.reviews = action.payload.data;

          return;
        }

        state.reviews.push(...action.payload.data);
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.reviewsLoadingStatus = LoadingStatus.Pending;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.reviewsLoadingStatus = LoadingStatus.Rejected;
      })
      .addCase(postReviewAction.fulfilled, (state) => {
        state.reviewPostingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.reviewPostingStatus = LoadingStatus.Pending;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.reviewPostingStatus = LoadingStatus.Rejected;
      });
  }
});

export {
  reviewsSlice
};

export type {
  TReviewsSliceState
};
