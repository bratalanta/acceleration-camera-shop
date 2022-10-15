import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../../types/state';
import { TCamera, TCamerasPriceRange, TFetchCamerasActionPayload, TFetchCamerasActionReturnedData, TFetchLikelyCamerasActionReturnedData, TFetchMinMaxCameraPricesActionPayload } from '../../../types/camera';
import { APIRoute, AppRoute, QueryParameter, SortType } from '../../../const';
import { toast } from 'react-toastify';
import browserHistory from '../../../browser-history';
import { StatusCodes } from 'http-status-codes';

const fetchCamerasAction = createAsyncThunk<TFetchCamerasActionReturnedData, TFetchCamerasActionPayload, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'cameras/fetchCameras',
  async ({currentPage, limit, queryParams}, {extra: api}) => {
    const {
      sortType,
      sortOrder,
      category,
      level,
      priceCeil,
      priceFloor,
      type
    } = queryParams;

    const response = await api.get<TCamera[]>(APIRoute.Cameras, {
      params: {
        [QueryParameter.Limit]: limit,
        [QueryParameter.Page]: currentPage,
        [QueryParameter.Sort]: sortType || (sortOrder && SortType.Price),
        [QueryParameter.Order]: sortOrder,
        [QueryParameter.Category]: category,
        [QueryParameter.Level]: level,
        [QueryParameter.PriceCeil]: priceCeil,
        [QueryParameter.PriceFloor]: priceFloor,
        [QueryParameter.Type]: type,
      }
    });

    return {
      data: response.data,
      dataTotalCount: Number(response.headers['x-total-count'])
    };
  }
);

const fetchMinMaxCameraPricesAction = createAsyncThunk<TCamerasPriceRange, TFetchMinMaxCameraPricesActionPayload, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'cameras/fetchMinMaxCameraPrices',
  async (queryParams, {extra: api}) => {
    const {
      category,
      level,
      priceCeil,
      priceFloor,
      type
    } = queryParams;

    const {data} = await api.get<TCamera[]>(APIRoute.Cameras, {
      params: {
        [QueryParameter.Sort]: SortType.Price,
        [QueryParameter.Category]: category,
        [QueryParameter.Level]: level,
        [QueryParameter.PriceCeil]: priceCeil,
        [QueryParameter.PriceFloor]: priceFloor,
        [QueryParameter.Type]: type,
      }
    });

    return {
      minPrice: data.at(0)?.price,
      maxPrice: data.at(-1)?.price
    };
  }
);

const fetchLikelyCamerasAction = createAsyncThunk<TFetchLikelyCamerasActionReturnedData[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'cameras/fetchLikelyCameras',
  async (input, {extra: api}) => {
    try {
      const {data} = await api.get<TCamera[]>(APIRoute.Cameras, {
        params: {
          [QueryParameter.NameLike]: input
        }
      });

      return data.map(({name, id}) => ({name, id}));
    } catch (err) {
      toast.warn('Не удалось загрузить подходящие товары');

      throw err;
    }
  }
);

const fetchCameraAction = createAsyncThunk<TCamera, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'cameras/fetchCamera',
  async (id, {extra: api}) => {
    try {
      const {data} = await api.get<TCamera>(`${APIRoute.Cameras}/${id}`);

      return data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        if (err.response.status === StatusCodes.NOT_FOUND) {
          browserHistory.push({
            pathname: `/${AppRoute.NotFound}`
          });
        }
      }

      throw err;
    }
  }
);

const fetchSimilarCamerasAction = createAsyncThunk<TCamera[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'cameras/fetchSimilarCameras',
  async (id, {extra: api}) => {
    try {
      const {data} = await api.get<TCamera[]>(`${APIRoute.Cameras}/${id}${APIRoute.Similar}`);

      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.warn('Не удалось загрузить похожие товары');
      }
      throw err;
    }
  }
);

export {
  fetchCameraAction,
  fetchCamerasAction,
  fetchSimilarCamerasAction,
  fetchLikelyCamerasAction,
  fetchMinMaxCameraPricesAction
};
