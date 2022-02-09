// import { walletconnect, walletlink } from '@/lib/connectors';

import { useEthers } from '@usedapp/core';
// import { useAppDispatch } from './useRedux';
// import { Dispatch } from '@reduxjs/toolkit';
// import { toggleWrongNetwork } from '@/store/ducks/wallet/slice';
// import { message } from 'antd';
import { injected } from 'lib/connectors';

// const handleError = (error: Error, dispatch: Dispatch<any>) => {
//   if (error.name === 'UnsupportedChainIdError') {
//     // return dispatch(toggleWrongNetwork());
//   }
//   if (error.message) {
//     message.error(error.message);
//   } else {
//     message.error('An unknown error occurred. Check the console for more details.');
//   }
// };

export const useWallet = () => {
  // const dispatch = useAppDispatch();
  const { activate, connector, ...props } = useEthers();

  const connect = async (type: 'injected' | 'walletconnect' | 'walletlink') => {
    try {
      if (type === 'injected') {
        return activate(injected);
      }

      // if (type === 'walletconnect') {
      //   return await activate(walletconnect, (error) => handleError(error, dispatch));
      // }

      // if (type === 'walletlink') {
      //   return await activate(walletlink, (error) => handleError(error, dispatch));
      // }
    } catch (err) {
      console.log('Connect wallet err', err);
    }
  };

  return { ...props, connector, connect };
};
