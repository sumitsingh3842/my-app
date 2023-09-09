import {createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AnatomyState {
  description: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AnatomyState = {
  description: '',
  status: 'idle',
};



export const dashBoardSlice = createSlice({
  name: 'dashBoard',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeDescription: (state,action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.description = action.payload;
    }
  }
});

export const { changeDescription } = dashBoardSlice.actions;
export default dashBoardSlice.reducer;