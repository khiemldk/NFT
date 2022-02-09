import { Divider, Typography } from 'antd';
import clsx from 'clsx';
import { Surface } from 'components/Surface';
import { FC } from 'react';
import styles from './Card.module.less';

const { Title } = Typography;

type CardProps = {
  name: string;
  price: string;
  edition: string;
  owner: string;
  brand: string;
};

export const Card: FC<CardProps> = ({ children, name, price, edition, owner, brand }) => {
  return (
    <Surface className={styles.root}>
      {children}
      <div className={styles.cardContent}>
        <Title className="text-black mb-1" level={2}>
          {name}
        </Title>
        <Divider className="my-3" />
        <div className={clsx(styles.space, 'text-black d-flex justify-content-between mb-3')}>
          <div className="d-flex flex-column align-items-start">
            <span>LISTING PRICE</span>
            {price}
          </div>
          <div className="d-flex flex-column align-items-end">
            <span>EDITION</span>
            {edition}
          </div>
        </div>
        <div className={clsx(styles.space, 'text-black d-flex justify-content-between mb-2')}>
          <div className="d-flex flex-column align-items-start">
            <span>OWNED BY</span>
            {owner}
          </div>
          <div className="d-flex flex-column align-items-end">
            <span>BRAND</span>
            {brand}
          </div>
        </div>
      </div>
    </Surface>
  );
};
