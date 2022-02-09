import { Checkbox } from 'antd';
import clsx from 'clsx';
import { FC } from 'react';
import styles from './CheckBoxCommon.module.css';

export const CheckBoxCommon: FC<{
  classText?: string;
  classCheckBox?: string;
  item: { value: any; text: string };
}> = ({ classCheckBox, classText, item }) => {
  return (
    <Checkbox className={clsx(styles.root, classCheckBox, 'customAntd')} checked={item.value}>
      <div className={clsx(styles.textLabel, classText)}>{item.text}</div>
    </Checkbox>
  );
};

CheckBoxCommon.defaultProps = {
  classCheckBox: 'ms-0 my-2',
  classText: 'ms-3',
};
