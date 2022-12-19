import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import {api} from './api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});
