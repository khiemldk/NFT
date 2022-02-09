import { BSCTestnet, Config } from '@usedapp/core';
export const config: Config = {
  networks: [BSCTestnet],
};

export const CURRENCY = {
  [BSCTestnet.chainId]: 'BSC',
};
