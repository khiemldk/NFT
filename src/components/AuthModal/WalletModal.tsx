import { FC, useMemo } from 'react';
import styles from './WalletModal.module.less';
import clsx from 'clsx';
import { Modal } from 'components/Modal';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAuthModal, setAuthModal } from 'store/ducks/system/slice';
import MetaMask from 'assets/images/Wallet/MetaMask.png';
import Coinbase from 'assets/images/Wallet/Coinbase.png';
import Question from 'assets/images/Wallet/Question.png';
import Portis from 'assets/images/Wallet/Portis.png';
import Fortmatic from 'assets/images/Wallet/Fortmatic.png';
import Cropped from 'assets/images/Wallet/Cropped.png';
import { Col, Row, Typography } from 'antd';

const { Paragraph, Title } = Typography;

export const WalletModal: FC = () => {
  const state = useAppSelector(getAuthModal);
  const dispatch = useAppDispatch();

  const visible = useMemo(() => state === 'wallet', [state]);

  const handleClose = () => {
    dispatch(setAuthModal(null));
  };

  return (
    <Modal closable={false} visible={visible} onCancel={handleClose} width={700}>
      <div className={clsx(styles.root, 'px-md-5 pb-5 p-3')}>
        <Title level={4}>CONNECT A WALLET</Title>
        <Row gutter={[16, 24]}>
          <Col span={12} className="text-center pointer">
            <img src={MetaMask} alt="MetaMask" />
            <Title level={4} className="mb-0">
              MetaMask
            </Title>
            <Paragraph>Connect to your MetaMask Wallet</Paragraph>
          </Col>
          <Col span={12} className="text-center pointer">
            <img src={Cropped} alt="Cropped" />
            <Title level={4} className="mb-0">
              WalletConnect
            </Title>
            <Paragraph>Scan with WalletConnect to connect</Paragraph>
          </Col>
          <Col span={12} className="text-center pointer">
            <img src={Coinbase} alt="Portis" />
            <Title level={4} className="mb-0">
              Coinbase Wallet
            </Title>
            <Paragraph>Connect to your Coinbaise Wallet</Paragraph>
          </Col>
          <Col span={12} className="text-center pointer">
            <img src={Portis} alt="Coinbase" />
            <Title level={4} className="mb-0">
              Portis
            </Title>
            <Paragraph>Connect to your Portis Wallet</Paragraph>
          </Col>

          <Col span={12} className="text-center pointer">
            <img src={Fortmatic} alt="Fortmatic" />
            <Title level={4} className="mb-0">
              Fortmatic
            </Title>
            <Paragraph>Connect to your Formatic Wallet</Paragraph>
          </Col>

          <Col span={12} className="text-center pointer">
            <img src={Question} alt="Question" />
            <Title level={4} className="mb-0">
              Don’t see your wallet?
            </Title>
            <Paragraph>Click to reach out to us</Paragraph>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};
