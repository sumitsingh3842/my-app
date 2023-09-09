import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dashBoardReducer from '../features/DashBoard/dashBoardSlice';

export const store = configureStore({
  reducer: {
    dashBoard: dashBoardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;