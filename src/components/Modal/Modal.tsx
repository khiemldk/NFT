import { FC } from 'react';
import styles from './styles.module.less';
import { Modal as AntModal, ModalProps } from 'antd';
import clsx from 'clsx';

const Modal: FC<ModalProps> = ({ children, ...props }) => {
  return (
    <AntModal className={clsx(styles.root)} {...props}>
      {children}
    </AntModal>
  );
};

export default Modal;
