import { FC, useEffect, useMemo } from 'react';
import styles from './styles.module.less';
import { Input, Form, Checkbox, Space, message } from 'antd';
import clsx from 'clsx';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAuthModal, setAuthModal } from 'store/ducks/system/slice';
import { useMutation } from 'react-query';
import { register, resendEmail } from 'api/account';
import { IError } from 'api/types';
import { IRegisterRequest, IResendEmailRequest } from 'api/account/types';

export const RegisterModal: FC = () => {
  const state = useAppSelector(getAuthModal);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const visible = useMemo(() => state === 'register', [state]);

  const { mutate: mutateRegister, status } = useMutation(register, {
    onSuccess: (data) => {
      sendEmailActive(data);
      message.success('Register successfully');
    },
    onError: (error: IError) => {
      message.error(error.meta.message);
    },
  });

  const { mutate: mutateResendEmail } = useMutation(resendEmail, {
    onSuccess: () => {
      message.success('Resend email successfully');
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

  const onRegister = (value: any) => {
    console.log(value);
    const registerRequest: IRegisterRequest = {
      email: value.email,
      password: value.password,
    };
    mutateRegister(registerRequest);
  };

  const sendEmailActive = (value: any) => {
    const resendEmailRequest: IResendEmailRequest = {
      email: value.email,
    };
    mutateResendEmail(resendEmailRequest);
  };

  return (
    <Modal visible={visible} onCancel={handleClose}>
      <div className={clsx(styles.root, 'p-md-5 p-3')}>
        <Space className={clsx(styles.topTitle, 'f-between flex-md-row flex-column')}>
          <div>
            <strong>Register your account</strong>
          </div>
          <div>
            Are you a member?
            <span className="pointer" onClick={() => dispatch(setAuthModal('login'))}>
              <strong> Login now</strong>
            </span>
          </div>
        </Space>
        <Form layout="vertical" onFinish={onRegister} form={form}>
          <Form.Item className="my-4" name="email">
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item className="my-4" name="password">
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item className="my-4" name="confirmPassword">
            <Input.Password size="large" placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item name="checkBox">
            <Checkbox className="d-flex align-items-center mb-2">
              <p className={styles.textTermPolicy}>
                By creating an account you agree to the Terms of Service and Privacy Policy
              </p>
            </Checkbox>
          </Form.Item>
          <Form.Item className="my-4">
            <Button loading={status === 'loading'} className="w-100" htmlType="submit">
              SIGN UP
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};
