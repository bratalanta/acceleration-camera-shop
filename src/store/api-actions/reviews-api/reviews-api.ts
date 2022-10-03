import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { APIRoute, REVIEWS_SORTING_QUERY } from '../../../const';
import { TFetchReviewsActionPayload, TFetchReviewsActionReturnedData, TReview, TReviewPost } from '../../../types/review';
import { AppDispatch, State } from '../../../types/state';
import {toast} from 'react-toastify';


const postReviewAction = createAsyncThunk<void, TReviewPost, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'reviews/postReview',
  async (review, {extra: api}) => {
    try {
      await api.post<TReview>(APIRoute.Reviews, review);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.warn('Не удалось отправить данные. Попробуйте позже');
      }
      throw err;
    }
  }
);

const fetchReviewsAction = createAsyncThunk<TFetchReviewsActionReturnedData, TFetchReviewsActionPayload, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'reviews/fetchReviews',
  async ({id, limit, page, replace}, {extra: api}) => {
    try {
      const response = await api.get<TReview[]>(
        `${APIRoute.Cameras}/${id}${APIRoute.Reviews}?${REVIEWS_SORTING_QUERY}`, {
          params: {
            _limit: limit,
            _page: page
          },
        }
      );

      return {
        data: response.data,
        dataTotalCount: Number(response.headers['x-total-count']),
        replace
      };
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.warn('Не удалось загрузить отзывы');
      }
      throw err;
    }
  }
);

export {
  fetchReviewsAction,
  postReviewAction
};
