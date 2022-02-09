import { FC, useState } from 'react';
import styles from './styles.module.css';
import { NFTInfo } from './components/NFTInfo';
import { BoxFAQ } from 'components/BoxFAQ';
import { FAQ } from 'pages/HomePage/components/FAQ';
import { Row } from 'antd';
import { BoxMarketPlace } from 'components/BoxMarketPlace';
import { History } from './components/History';
import { HeaderTitle } from 'components/HeaderTitle';

const list = [
  {
    title: 'Lorem ipsum dolor sit amet?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et.',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et.',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et.',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et.',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et.',
  },
];

const listNtf = [1, 2, 3, 4];

const NFTDetail: FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className={styles.root}>
      <NFTInfo />
      <div className="my-4">
        {list.map((item, index) => (
          <BoxFAQ
            className="w-100"
            active={activeIndex === index}
            handleClick={() => handleClick(index)}
            key={index}
            item={item}
          />
        ))}
      </div>
      <div className="my-4">
        <HeaderTitle description="EXPLORE OTHER EDITIONS ON VERDANT MARKETPLACE" />
        <Row gutter={[24, 24]} className="my-4">
          {listNtf.map((item, index) => (
            <BoxMarketPlace key={index} />
          ))}
        </Row>
      </div>
      <History />
      <FAQ />
    </div>
  );
};

export default NFTDetail;
