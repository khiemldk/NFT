import { Select } from 'antd';
import clsx from 'clsx';
import { FC } from 'react';
import styles from './SelectCommon.module.css';

const { Option } = Select;

export const SelectCommon: FC<{
  classSelectBox?: string;
  list: { value: any; text: string }[];
}> = ({ classSelectBox, list }) => {
  return (
    <Select className={clsx(styles.root, classSelectBox)} defaultValue="eth">
      {list.map((item, index) => (
        <Option key={index} value={item.value}>
          {item.text}
        </Option>
      ))}
    </Select>
  );
};

SelectCommon.defaultProps = {
  classSelectBox: '',
};
