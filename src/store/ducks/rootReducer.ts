import { combineReducers } from '@reduxjs/toolkit';

import systemReducer from './system/slice';
import walletReducer from './wallet/slice';
import userReducer from './user/slice';

const createRootReducer = () => {
  return combineReducers({
    system: systemReducer,
    wallet: walletReducer,
    user: userReducer,
  });
};

export default createRootReducer;
