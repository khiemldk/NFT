import { FC } from 'react';
import {
  toggleAccountModal,
  // toggleWalletModal,
  toggleWrongNetwork,
} from 'store/ducks/wallet/slice';
import { useAppDispatch } from 'hooks/useRedux';
import { shortenAddress, useEtherBalance, useEthers, useContractCall } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { CURRENCY } from 'lib/config';
import { Button } from 'components/Button';
import { Typography } from 'antd';
import { useWallet } from 'hooks/useWallet';
import erc20abi from 'contracts/ERC20.json';
import { Interface } from 'ethers/lib/utils';

type AccountProps = {
  triedToEagerConnect: boolean;
};

const Account: FC<AccountProps> = ({ triedToEagerConnect }) => {
  const dispatch = useAppDispatch();
  const { chainId, account, error } = useEthers();
  const etherBalance = useEtherBalance(account);
  const { connect } = useWallet();
  const results =
    useContractCall({
      method: 'totalSupply',
      args: [],
      address: '0xa32F35D5b64fC8405E8e4357748AC0ac2BDB27a5',
      abi: new Interface(erc20abi),
    }) ?? [];

  console.log(results);

  const openWalletModal = () => {
    // dispatch(toggleWalletModal());
    connect('injected');
  };

  const openWrongNetwork = () => {
    dispatch(toggleWrongNetwork());
  };
  const openAccountModal = () => {
    dispatch(toggleAccountModal());
  };

  if (!triedToEagerConnect) {
    return null;
  }

  if (String(error?.name) === 'UnsupportedChainIdError') {
    return <Button onClick={openWrongNetwork}>Wrong network</Button>;
  }

  if (typeof account !== 'string' || !chainId) {
    return <Button onClick={openWalletModal}>Connect wallet</Button>;
  }

  return (
    <Button onClick={openAccountModal}>
      <Typography>
        {Number(formatEther(etherBalance || 0)).toFixed(2)}&nbsp;
        {CURRENCY[chainId] || ''}
      </Typography>

      <p
        style={{
          fontSize: 12,
          backgroundColor: '#da1d78',
          color: '#fff',
          borderRadius: 99,
        }}
      >
        {shortenAddress(account)}
      </p>
    </Button>
  );
};

export default Account;
