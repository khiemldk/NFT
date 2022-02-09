import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface TSystemReducer {
  authModal: 'login' | 'register' | 'forgot' | 'wallet' | null;
  openWallet: boolean;
  openWrongNetwork: boolean;
  openAccount: boolean;
}

const initialState = {
  authModal: null,
  openWallet: false,
  openWrongNetwork: false,
  openAccount: false,
} as TSystemReducer;

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setAuthModal(state, action: PayloadAction<TSystemReducer['authModal']>) {
      return {
        ...state,
        authModal: action.payload,
      };
    },
    toggleWalletModal: (state) => {
      return {
        ...state,
        openWallet: !state.openWallet,
      };
    },
    toggleWrongNetwork: (state) => {
      return {
        ...state,
        openWrongNetwork: !state.openWrongNetwork,
      };
    },
    toggleAccountModal: (state) => {
      return {
        ...state,
        openAccount: !state.openAccount,
      };
    },
  },
});

export const getSystem = (state: RootState): TSystemReducer => state.system;

export const getAuthModal = (state: RootState): TSystemReducer['authModal'] => state.system.authModal;

export const { setAuthModal } = systemSlice.actions;
export default systemSlice.reducer;
