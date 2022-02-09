import { FC } from 'react';
import styles from './BoxMarketPlace.module.css';
import clsx from 'clsx';
import { Col } from 'antd';

type BoxMarketProps = {
  onClick?: () => void;
  md?: number;
  xs?: number;
  sm?: number;
};

export const BoxMarketPlace: FC<BoxMarketProps> = ({ children, onClick, md, xs, sm }) => {
  return (
    <Col className="pointer" onClick={onClick} md={md} xs={xs} sm={sm}>
      <div className={clsx(styles.root)}>
        {children}
        <div className={clsx(styles.marketPlaceInfo, 'py-2 px-1 px-md-3')}>
          <div className="d-flex justify-content-between">
            <h5 className="mb-1">LISTING PRICE</h5>
            <h5 className="mb-1">EDITION</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p className="mb-0">9.37 ETH</p>
            <p className="mb-0">#7</p>
          </div>
          <span className="d-block mb-3">~$30,000.00</span>
          <div className="d-flex justify-content-between">
            <h5 className="mb-1">OWNED BY</h5>
            <h5 className="mb-1">BRAND</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p className="mb-0">@Midas1</p>
            <p className="mb-0">Dictador</p>
          </div>
        </div>
      </div>
    </Col>
  );
};
