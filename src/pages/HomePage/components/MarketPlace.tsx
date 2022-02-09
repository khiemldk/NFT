import { FC } from 'react';
import styles from './MarketPlace.module.css';
import { Col, Row } from 'antd';
import { Button } from 'components/Button';
import { HeaderTitle } from 'components/HeaderTitle';
import clsx from 'clsx';
import { Card } from 'components/Card';

const list = new Array(8).fill(1);

export const MarketPlace: FC = () => {
  return (
    <div className={clsx(styles.root, 'container text-center')}>
      <HeaderTitle
        title="MARKETPLACE"
        description="Explore the BlockBar marketplace to acquire your next exquisite liquor NFT.MARKET PLACE"
      />

      <Row gutter={[16, 16]} className={styles.marketPlace} justify="center">
        {list.map((item, index) => (
          <Col key={index} md={6}>
            <Card name="Name" price="9.37 ETH" edition="#7" owner="@Midas1" brand="Dictador">
              <img
                key={index}
                className={styles.marketPlaceImage}
                src={require(`assets/images/NFT/${index % 6}.png`)}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Button className="mt-5" type="primary">
        EXPLORE MORE
      </Button>
    </div>
  );
};
