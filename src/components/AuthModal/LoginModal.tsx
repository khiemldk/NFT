import { FC, useEffect, useMemo } from 'react';
import styles from './styles.module.less';
import { Input, Form, Space, message } from 'antd';
import clsx from 'clsx';
import { Button } from 'components/Button';
import GoogleImg from 'assets/images/GoogleImg.png';
import { Modal } from 'components/Modal';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAuthModal, setAuthModal } from 'store/ducks/system/slice';
import { setToken } from 'store/ducks/user/slice';
import { login, ILoginRequest } from 'api/account';
import { useMutation } from 'react-query';
import { IError } from 'api/types';
import { LOCAL_STORAGE } from 'utils/constant';

export const LoginModal: FC = () => {
  const state = useAppSelector(getAuthModal);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const visible = useMemo(() => state === 'login', [state]);

  const { mutate: mutateLogin, status } = useMutation(login, {
    onSuccess: (data) => {
      dispatch(setAuthModal(null));
      dispatch(setToken(data?.token));
      localStorage.setItem(LOCAL_STORAGE.token, data?.token);
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

  const onLogin = (value: any) => {
    const loginRequest: ILoginRequest = {
      email: value.email,
      password: value.password,
    };
    mutateLogin(loginRequest);
  };

  return (
    <Modal visible={visible} onCancel={handleClose}>
      <div className={clsx(styles.root, 'p-md-5 p-3')}>
        <Space className={clsx(styles.topTitle, 'f-between flex-md-row flex-column')}>
          <div>
            <strong>Login</strong>
          </div>
          <div>
            Not a member yet?
            <span className="pointer" onClick={() => dispatch(setAuthModal('register'))}>
              <strong> Register now</strong>
            </span>
          </div>
        </Space>
        <Form layout="vertical" onFinish={onLogin} form={form}>
          <Form.Item name="email" className="my-4">
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item name="password" className="my-4">
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item className="my-4">
            <Button loading={status === 'loading'} className="w-100" htmlType="submit">
              LOG IN
            </Button>
          </Form.Item>
        </Form>
        <div className="f-center">
          <a type="link" onClick={() => dispatch(setAuthModal('forgot'))}>
            <strong>Forgot your password</strong>
          </a>
        </div>
        <div className={styles.loginSocial}>
          <p className="text-center">Or sign in with</p>
          <Button className={clsx(styles.loginSocialBtn, 'd-flex mx-auto align-items-center')}>
            <img className="me-4 d-block" alt="google" src={GoogleImg} />
            <p className="mb-0">GOOGLE</p>
          </Button>
        </div>
      </div>
    </Modal>
  );
};
