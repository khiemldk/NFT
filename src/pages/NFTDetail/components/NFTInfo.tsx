import { FC } from 'react';
import styles from './NFTInfo.module.css';
import NFTDetailImg from 'assets/images/NFTDetailImg.png';
import { Col, Row } from 'antd';
import { Button } from 'components/Button';
import clsx from 'clsx';

export const NFTInfo: FC = () => {
  return (
    <div className={styles.root}>
      <Row>
        <Col xs={24} md={12} className="d-flex flex-column justify-content-between mb-md-0 mb-4 pe-md-4">
          <div>
            <h2 className="mb-0">NFT NAME</h2>
            <h2 className="mb-0">#10</h2>
            <div
              className={clsx(styles.description, 'text-justify')}
              dangerouslySetInnerHTML={{ __html: 'NFT DESCRIPTION' }}
            />
          </div>
          <div className="mt-3">
            <div className="d-flex mb-3">
              <div className="me-5">
                <h5 className="mb-0">CURRENT OWNER</h5>
                <div className={styles.textColor}>@abc123xyz</div>
              </div>
              <div>
                <h5 className="mb-0">NFT ID</h5>
                <div className={styles.textColor}>
                  191 <span>View on Etherscan</span>
                </div>
              </div>
            </div>
            <h5 className="mb-0">Price</h5>
            <div className={styles.textColor}>
              0.39 ETH <span>~$1,003.00</span>
            </div>
            <div className="mt-3">
              <Button className={clsx(styles.customBtn, 'me-4')}>BUY NOW</Button>
              <Button className={clsx(styles.customBtnView)}>VIEW RELEASE</Button>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12} className="ps-md-4">
          <img className="d-block w-100" alt="img" src={NFTDetailImg} />
        </Col>
      </Row>
    </div>
  );
};
