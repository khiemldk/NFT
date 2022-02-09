import { Typography } from 'antd';
import clsx from 'clsx';
import { Button } from 'components/Button';
import { Carousel } from 'components/Carousel';
import { FC } from 'react';
import styles from './Banner.module.less';
import CarouselImg from 'assets/images/CarouselImg.png';

const { Title } = Typography;

const EXAMPLE_LIST = [1, 2, 4, 5, 6, 7, 8, 9];

export const Banner: FC = () => {
  return (
    <div className={clsx(styles.root, 'position-relative')}>
      <div className={styles.videoWrapper}>
        <video
          className={styles.videoWrapper}
          src="https://cdn.blockbar.com/media/uploads/product/Product/218a7fc7-0b08-40b9-a37a-7e7998175620/PAT-Blockbar-Hero_3.mp4"
          loop={true}
          autoPlay
          muted
        />
      </div>
      <div className={clsx(styles.swiperWrapper, 'position-absolute w-100 container-fluid')}>
        <Title level={1}>
          Penfolds Magill Cellar 3 <br />
          2018 Cabernet Shiraz
        </Title>
        <Title level={4}>
          AVAILABLE ONLY ON BLOCKBAR <br /> ON Jan 18, 2022
        </Title>
        <Button className={clsx('my-4')} type="primary">
          View Detail
        </Button>
        <p className={clsx('mb-2 text-white fw-bold')}>HOT COLLECTION</p>
        <Carousel
          autoPlay={true}
          slidesPerRow={4}
          className={styles.root}
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
          draggable
          infinite
        >
          {EXAMPLE_LIST?.map((item, index) => (
            <div key={index} className={styles.carouselItem}>
              <img src={CarouselImg} alt="img" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
