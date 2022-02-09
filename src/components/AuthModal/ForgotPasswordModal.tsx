import { FC, useEffect, useMemo } from 'react';
import styles from './styles.module.less';
import { Input, Form, message } from 'antd';
import clsx from 'clsx';
import { Modal } from 'components/Modal';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAuthModal, setAuthModal } from 'store/ducks/system/slice';
import { Button } from 'components/Button';
import { sendEmailResetPassword, IResendEmailRequest } from 'api/account';
import { useMutation } from 'react-query';
import { IError } from 'api/types';

export const ForgotPasswordModal: FC = () => {
  const state = useAppSelector(getAuthModal);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const visible = useMemo(() => state === 'forgot', [state]);

  const { mutate: mutateSendEmailResetPassword, status } = useMutation(sendEmailResetPassword, {
    onSuccess: () => {
      dispatch(setAuthModal(null));
      message.success('Send email reset password successfully');
    },
    onError: (error: IError) => {
      message.error(error.meta.message);
    },
  });

  useEffect(() => {
    form.resetFields();
  }, [visible]);

  const handleClose = () => {
    dispatch(setAuthModal(null));
  };

  const onForgotPassword = (value: any) => {
    const resendEmailRequest: IResendEmailRequest = {
      email: value.email,
    };
    mutateSendEmailResetPassword(resendEmailRequest);
  };

  return (
    <Modal visible={visible} onCancel={handleClose}>
      <div className={clsx(styles.root, 'p-md-5 p-3')}>
        <h2 className={styles.topTitle}>
          <strong>Forgot your password</strong>
        </h2>
        <Form layout="vertical" onFinish={onForgotPassword} form={form}>
          <p>Enter your username or email address and we will send you a link to reset your password.</p>
          <Form.Item className="my-4" name="email">
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item className={'my-4'}>
            <Button loading={status === 'loading'} className="w-100" htmlType="submit">
              FORGOT PASSWORD
            </Button>
          </Form.Item>
        </Form>
        <p className="mt-3 text-center mb-0 pointer" onClick={() => dispatch(setAuthModal('login'))}>
          <strong>Back</strong>
        </p>
      </div>
    </Modal>
  );
};
