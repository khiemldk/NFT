import { DownOutlined, UpOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { FC } from 'react';
import styles from './BoxFAQ.module.css';

interface Props {
  handleClick: () => void;
  active: boolean;
  item: { content: string; title: string };
  className?: string;
}

export const BoxFAQ: FC<Props> = ({ className, handleClick, active, item }) => {
  return (
    <div className={clsx(className, styles.root, 'mx-auto')}>
      <div
        onClick={handleClick}
        className={clsx(!active ? styles.question : '', 'd-flex justify-content-between py-3 pointer')}
      >
        <h5 className={clsx(styles.boxFAQTitle, 'mb-0')}>{item.title}</h5>
        {!active && <DownOutlined className={clsx(styles.iconDown, 'd-flex my-auto')} />}
        {active && <UpOutlined className={clsx(styles.iconDown, 'd-flex my-auto')} />}
      </div>
      <div
        className={clsx(
          styles.contentDes,
          active ? styles.showContent : '',
          active ? styles.question : '',
          active ? 'py-3' : ''
        )}
        dangerouslySetInnerHTML={{
          __html: item.content,
        }}
      />
    </div>
  );
};
