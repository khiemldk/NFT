import { Col, Typography } from 'antd';
import clsx from 'clsx';
import { Button } from 'components/Button';
import { FC } from 'react';
import styles from './Payment.module.less';

const { Title } = Typography;

export const Payment: FC = () => {
  return (
    <Col xs={24} md={9} className={clsx(styles.root, 'ps-md-4 pe-md-0 px-3')}>
      <Title level={2} className={clsx(styles.title, 'text-center text-md-start')}>
        PAYMENT METHODS
      </Title>
      <Button className="w-100">Change Wallet</Button>
    </Col>
  );
};
