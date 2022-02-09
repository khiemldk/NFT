import { forwardRef } from 'react';
import { Input as AntdInput, InputProps } from 'antd';
import styles from './Input.module.less';
import clsx from 'clsx';

export type ModifiedInputProps = Partial<InputProps> & {
  id?: string;
  searchForm?: boolean;
  className?: string;
  surfaceClassName?: string;
};

export const Input = forwardRef<AntdInput, ModifiedInputProps>(function Input(
  { className, id, size = 'middle', ...props },
  ref
) {
  const inputWithSize = styles[size];

  return (
    <AntdInput
      // onFocus={() => setFocused(true)}
      // onBlur={() => setFocused(false)}
      ref={ref}
      id={id}
      className={clsx(styles.input, inputWithSize, className)}
      {...props}
    />
  );
});
