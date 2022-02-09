import { Input } from 'antd';
import clsx from 'clsx';
import { FC } from 'react';
import styles from './InputCommon.module.css';

export const InputCommon: FC<{
  classInput?: string;
  placeholder?: string;
  prefix?: any;
}> = ({ classInput, placeholder, prefix }) => {
  return <Input className={clsx(styles.root, classInput)} placeholder={placeholder} prefix={prefix} />;
};

InputCommon.defaultProps = {
  classInput: '',
  placeholder: '',
  prefix: null,
};
