import { FC } from 'react';
import styles from './Footer.module.css';
import clsx from 'clsx';
import { Layout as AntdLayout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Twitter from 'assets/images/Twitter.png';
import Instagram from 'assets/images/Instagram.png';
import Discord from 'assets/images/Discord.png';
import RHTImg from 'assets/images/RHT-DigiCapital1.png';

const LISTMENU = [
  { title: 'NEWSLETTER' },
  { title: 'ABOUT' },
  { title: 'PRIVACY POLICY' },
  { title: 'TERMS OF SERVICE' },
  { title: 'SUPPORT' },
  { title: 'WEBSITE TERMS AND CONDITIONS' },
];

export const Footer: FC = () => {
  return (
    <AntdLayout.Footer className={clsx(styles.root, '')}>
      <div className={clsx(styles.content, 'container')}>
        <Row justify="center">
          <Col className="mb-4" span={24}>
            <h2 className={clsx('mb-0 text-center')}>
              <Link to={'/'}>VERDANT</Link>
            </h2>
            <div style={{ fontSize: '16px' }} className="d-flex align-items-center justify-content-center">
              Powered by <img className="ms-3" src={RHTImg} alt="img" />
            </div>
          </Col>
          <Col span={24} className="text-center">
            {LISTMENU.map((item, index) => (
              <Link key={index} to={'/'}>
                <strong className="me-4">{item.title}</strong>
              </Link>
            ))}
          </Col>
          <Col span={24} className="text-center mb-3">
            <span className="me-3">digicap@gmail.com</span>/<span className="ms-3">+ 82 12345678</span>
          </Col>
          <Col span={24} className="text-center mb-3">
            <img className="pe-3" alt="twitter" src={Twitter} />
            <img className="pe-3" alt="instagram" src={Instagram} />
            <img className="pe-3" alt="discord" src={Discord} />
          </Col>
        </Row>
      </div>
    </AntdLayout.Footer>
  );
};
