import { Row } from 'antd';
import clsx from 'clsx';
import { FC } from 'react';
import styles from './styles.module.less';
import { useParams } from 'react-router-dom';
import { Setting } from './components/Setting';
import { Payment } from './components/Payment';
import { MenuProfile } from './components/MenuProfile';
import { ChangePassword } from './components/ChangePassword';

const ProfilePage: FC = () => {
  const { tab } = useParams<{ tab: string }>();

  return (
    <div className={clsx(styles.root, 'container-fluid')}>
      <Row>
        <MenuProfile />
        {tab === 'setting' && <Setting />}
        {tab === 'payment' && <Payment />}
        {tab === 'change-password' && <ChangePassword />}
      </Row>
    </div>
  );
};

export default ProfilePage;
