import { Typography } from 'antd';
import { FC } from 'react';
import styles from './HeaderTitle.module.less';

const { Title } = Typography;

interface TitleProps {
  title?: string;
  description?: string;
  className?: string;
}

export const HeaderTitle: FC<TitleProps> = ({ title, description }) => {
  return (
    <div className={styles.root}>
      <Title className="mb-0 fw-bold" level={1}>
        {title}
      </Title>
      {description && (
        <Title className="my-0 mb-4 fw-bold" level={3}>
          {description}
        </Title>
      )}
    </div>
  );
};
