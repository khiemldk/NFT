import { FC } from 'react';
import styles from './LoadingFullpage.module.css';
import { Spin } from 'antd';

export const LoadingFullpage: FC = () => {
  return (
    <div className={styles.root}>
      <Spin />
    </div>
  );
};
