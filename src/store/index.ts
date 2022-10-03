import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReducer } from './root-reducer';

const api = createAPI();

const createStore = (initialState = {}) => (
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => (
      getDefaultMiddleware({
        thunk: {
          extraArgument: api
        }
      })
    ),
    preloadedState: initialState
  })
);

const store = createStore();

export {
  createStore,
  store
};
