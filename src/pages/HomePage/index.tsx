import { FC } from 'react';
import styles from './styles.module.css';
import { MarketPlace } from './components/MarketPlace';
import { Brands } from './components/Brands';
import { FAQ } from './components/FAQ';
import { Banner } from './components/Banner';

const HomePage: FC = () => {
  return (
    <div className={styles.root}>
      <Banner />
      <MarketPlace />
      <Brands />
      <FAQ />
    </div>
  );
};

export default HomePage;
