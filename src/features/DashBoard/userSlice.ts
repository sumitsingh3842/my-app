import {createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserData {
  accessToken: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UserData = {
  accessToken: '',
  status: 'idle',
};



export const userSlice = createSlice({
  name: 'userData',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateToken: (state,action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.accessToken = action.payload;
    }
  }
});

export const { updateToken } = userSlice.actions;
export default userSlice.reducer;