import { Col, Row, Typography } from 'antd';
import clsx from 'clsx';
import { HeaderTitle } from 'components/HeaderTitle';
import { FC } from 'react';
import styles from './styles.module.less';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';
import { Collapse } from 'components/Collapse';
import { Input } from 'components/Input';

const { Paragraph } = Typography;

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

const FAQPage: FC = () => {
  return (
    <div className={clsx(styles.root, 'container-fluid')}>
      <HeaderTitle title="FAQs" className="mt-5" />
      <Paragraph className="text-center">
        Search for answers or
        <Link to={'/'}>
          <strong> Contact Support</strong>
        </Link>
      </Paragraph>
      <Row>
        <Col span={24} className="d-flex justify-content-center flex-wrap">
          <Button className={clsx(styles.customBtnFAQ, 'mb-4 me-3')}>GETTING STARTED</Button>
          <Button className={clsx(styles.customBtnFAQ, 'mb-4 me-3')}>BRANDS</Button>
          <Button className={clsx(styles.customBtnFAQ, 'mb-4 me-3')}>BUYING & SELLING</Button>
          <Button className={clsx(styles.customBtnFAQ, 'mb-4 me-3')}>BLOCKCHAIN</Button>
        </Col>
        <Col span={24}>
          <Collapse data={FAQ_LIST} className="mw-100" />
        </Col>
      </Row>
      <Row className={styles.faqSubscribe} align="middle" justify="space-around">
        <Col md={8} xs={24} className="text-center">
          <strong>Subscribe to our newsletter</strong>
        </Col>
        <Col md={8} xs={24} className="text-center">
          <Input placeholder="Email*" />
        </Col>
        <Col md={8} xs={24} className="text-center">
          <Button className={clsx(styles.customBtnFAQ)}>BLOCKCHAIN</Button>
        </Col>
      </Row>
    </div>
  );
};

export default FAQPage;
