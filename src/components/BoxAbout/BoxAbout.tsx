import { Col } from 'antd';
import { FC } from 'react';
import styles from './BoxAbout.module.css';
import CheckBoxImg from 'assets/images/CheckBoxImg.png';
import clsx from 'clsx';

export const BoxAbout: FC<{ title: string; content: string; index: number }> = ({ index, title, content }) => {
  return (
    <Col xs={24} md={12} className={clsx(styles.root, 'mt-5')}>
      <div className={`d-flex w-75 ${index % 2 === 1 ? 'mx-auto ms-md-auto' : 'mx-auto'}`}>
        <img className="d-block" src={CheckBoxImg} alt="img" />
        <div className="ps-lg-5 ps-4">
          <h5>{title}</h5>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </Col>
  );
};
