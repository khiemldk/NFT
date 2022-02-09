import { Space, Typography } from 'antd';
import { Button } from 'components/Button';
import { Collapse } from 'components/Collapse';
import { HeaderTitle } from 'components/HeaderTitle';
import { FC } from 'react';
import styles from './FAQ.module.css';
import POLYGON from 'assets/images/Polygon.png';

const { Text } = Typography;

const FAQ_LIST: { title: string; content: string }[] = [
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

export const FAQ: FC = () => {
  return (
    <div className={styles.root}>
      <HeaderTitle title="FAQ" />
      <Collapse data={FAQ_LIST} />
      <Space className="my-5" direction="vertical" align="center">
        <Button type="primary">SEE ALL FAQs</Button>
      </Space>
      <HeaderTitle title="WHY WE USE POLYGON" />
      <img className="mt-5" src={POLYGON} alt="polygon" />
      <Text className="my-4 text-center" style={{ fontSize: '16px' }}>
        “Polygon’s focus on environmental issues was the decisive factor that persuaded Verdant to choose Polygon as its
        vendor.”
      </Text>
    </div>
  );
};
