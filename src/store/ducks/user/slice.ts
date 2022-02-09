import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { LOCAL_STORAGE } from 'utils/constant';

export interface TUserReducer {
  token: string;
}

const initialState = {
  token: localStorage.getItem(LOCAL_STORAGE.token),
} as TUserReducer;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<TUserReducer['token']>) {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export const getUser = (state: RootState): TUserReducer => state.user;

export const getToken = (state: RootState): TUserReducer['token'] => state.user.token;

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
