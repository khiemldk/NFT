import clsx from 'clsx';
import { FC } from 'react';
import styles from './Brand.module.css';
import BrandCircleImg from 'assets/images/BrandCircleImg.png';
import { Button } from 'components/Button';
import { Row, Space } from 'antd';
import { BoxAbout } from 'components/BoxAbout';
import { HeaderTitle } from 'components/HeaderTitle';
import { Carousel } from 'components/Carousel';

const BRAND_LIST = [1, 2, 3, 4, 5, 6];

const listVerdant = [
  {
    title: 'Lorem ipsum dolor',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    title: 'Lorem ipsum dolor',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    title: 'Lorem ipsum dolor',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    title: 'Lorem ipsum dolor',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
];

export const Brands: FC = () => {
  return (
    <div className={clsx(styles.root, 'container-fluid')}>
      <HeaderTitle
        title="BRANDS"
        description="We partner with the top luxury liquor brands to bring you unique access to unique and rare bottles."
      />
      <Carousel
        className="mb-5"
        slidesPerRow={3}
        responsive={[
          {
            breakpoint: 1270,
            settings: {
              slidesPerRow: 3,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesPerRow: 2,
            },
          },
          {
            breakpoint: 678,
            settings: {
              slidesPerRow: 1,
            },
          },
        ]}
      >
        {BRAND_LIST.map((item, index) => (
          <div key={index}>
            <div className="d-flex justify-content-center">
              <img className="d-block" src={BrandCircleImg} alt="img" />
            </div>
          </div>
        ))}
      </Carousel>
      <HeaderTitle title="What is VERDANT?" />
      <div className={clsx('d-flex mx-auto mt-5', styles.verdant)}>
        <Row>
          {listVerdant.map((item, index) => (
            <BoxAbout index={index} key={index} title={item.title} content={item.content} />
          ))}
        </Row>
      </div>
      <Space className="my-5" direction="vertical" align="center">
        <Button type="primary">SEE MORE</Button>
      </Space>
    </div>
  );
};
