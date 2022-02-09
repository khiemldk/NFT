import { FC } from 'react';
import { ForgotPasswordModal } from './ForgotPasswordModal';
import { LoginModal } from './LoginModal';
import { RegisterModal } from './RegisterModal';
import { WalletModal } from './WalletModal';

export const AuthModal: FC = () => {
  return (
    <>
      <WalletModal />
      <LoginModal />
      <RegisterModal />
      <ForgotPasswordModal />
    </>
  );
};
