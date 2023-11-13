import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dashBoardReducer from '../features/DashBoard/dashBoardSlice';
import userReducer from '../features/DashBoard/userSlice';
import liveChatReducer from '../features/LiveChat/liveChatSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashBoardReducer,
    userData: userReducer,
    liveChat: liveChatReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;