import { SettingOutlined, WalletOutlined } from '@ant-design/icons';
import { Col, Menu, message, Typography } from 'antd';
import { Button } from 'components/Button';
import { FC } from 'react';
import styles from './MenuProfile.module.less';
import Avatar from 'assets/images/Avatar.png';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { IError } from 'api/types';
import { logout } from 'api/account';
import { setToken } from 'store/ducks/user/slice';
import { useAppDispatch } from 'hooks';
import { routesEnum } from 'pages/Routes';
import { LOCAL_STORAGE } from 'utils/constant';

const { Paragraph } = Typography;

export const MenuProfile: FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const { mutate: mutateLogout } = useMutation(logout, {
    onSuccess: () => {
      localStorage.removeItem(LOCAL_STORAGE.token);
      dispatch(setToken(''));
      history.push(routesEnum.home);
    },
    onError: (error: IError) => {
      message.error(error.meta.message);
    },
  });

  const handleLogout = () => {
    mutateLogout();
  };

  return (
    <Col xs={24} md={6} className={styles.root}>
      <img src={Avatar} alt="avatar" className="w-100" />
      <div className="px-3">
        <Paragraph className={styles.addressWallet}>0xbb835...a6edfa7f6a72</Paragraph>
        <Button className="w-100 mx-auto mb-3">QR CODE</Button>
        <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark">
          <Menu.Item key="1" icon={<SettingOutlined />} onClick={() => history.push('/profile/setting')}>
            Setting
          </Menu.Item>
          <Menu.Item key="2" icon={<WalletOutlined />} onClick={() => history.push('/profile/payment')}>
            Payment Methods
          </Menu.Item>
          <Menu.Item key="3" icon={<WalletOutlined />} onClick={() => history.push('/profile/change-password')}>
            Change Password
          </Menu.Item>
          <Menu.Item key="4" icon={<WalletOutlined />} onClick={handleLogout}>
            Logout
          </Menu.Item>
        </Menu>
      </div>
    </Col>
  );
};
