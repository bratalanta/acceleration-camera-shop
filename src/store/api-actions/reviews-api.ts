import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { TReview, TReviewPost } from '../../types/review';
import { AppDispatch, State } from '../../types/state';

const postReviewAction = createAsyncThunk<TReview[], TReviewPost, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'reviews/postReview',
  async (review, {extra: api}) => {
    const {data} = await api.post<TReview[]>(APIRoute.Reviews, review);

    return data;
  }
);

const fetchReviewsAction = createAsyncThunk<TReview[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'reviews/fetchReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<TReview[]>(`${APIRoute.Cameras}/${id}${APIRoute.Reviews}`);

    return data;
  }
);

export {
  fetchReviewsAction,
  postReviewAction
};
