import { FC } from 'react';
import styles from './Collapse.module.css';
import { Collapse as CollapseAntd } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import clsx from 'clsx';

const { Panel } = CollapseAntd;

interface CollapseProps {
  data: { title: string; content: string }[];
  className?: string;
}
export const Collapse: FC<CollapseProps> = ({ data, className }) => {
  return (
    <CollapseAntd
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      className={clsx(styles.collapse, className)}
      bordered={false}
      ghost
    >
      {data.map((panel, index) => (
        <Panel header={panel.title} key={index}>
          <p>{panel.content}</p>
        </Panel>
      ))}
    </CollapseAntd>
  );
};
