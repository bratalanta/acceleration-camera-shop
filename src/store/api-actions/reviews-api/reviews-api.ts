import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { APIRoute, DEFAULT_PAGE, MAX_REVIEWS_COUNT_PER_PAGE, QueryParameter, REVIEWS_SORTING_QUERY } from '../../../const';
import { TFetchReviewsActionPayload, TFetchReviewsActionReturnedData, TPostReviewActionPayload, TReview } from '../../../types/review';
import { AppDispatch, State } from '../../../types/state';
import {toast} from 'react-toastify';


const postReviewAction = createAsyncThunk<void, TPostReviewActionPayload, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'reviews/postReview',
  async (
    {cameraId,
      userName,
      advantage,
      disadvantage,
      review,
      rating,
      currentPage
    }, {extra: api, dispatch}) => {
    try {
      await api.post<TReview>(APIRoute.Reviews, {
        userName,
        advantage,
        disadvantage,
        review,
        rating,
        cameraId
      });

      dispatch(fetchReviewsAction({
        id: cameraId,
        limit: MAX_REVIEWS_COUNT_PER_PAGE * (currentPage - 1),
        page: Number(DEFAULT_PAGE),
        replace: true
      }));
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
            [QueryParameter.Limit]: limit,
            [QueryParameter.Page]: page
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
