import { Menu, Layout, Space, Form } from 'antd';
import clsx from 'clsx';
import { Button } from 'components/Button';
import { Link, useHistory } from 'react-router-dom';
import styles from './Desktop.module.less';
import { navigationRoutes } from './routes';
import { routesEnum } from 'pages/Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Input } from 'components/Input';
import { useEagerConnect } from 'hooks/useEagerConnect';
import { Account } from './Account';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setAuthModal } from 'store/ducks/system/slice';
import { getToken } from 'store/ducks/user/slice';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const NavbarDesktop = () => {
  const history = useHistory();

  const triedToEagerConnect = useEagerConnect();
  const dispatch = useAppDispatch();
  const token = useAppSelector(getToken);

  return (
    <Layout.Header className={styles.root}>
      <div className={clsx('container-fluid', styles.content)}>
        <Link className={clsx(styles.logo, 'fs-2 fw-bolder me-3 lh-1 text-white')} to={routesEnum.home}>
          Verdant
        </Link>
        <Menu mode="horizontal" className={clsx(styles.menu)}>
          {navigationRoutes.map((route) => (
            <Menu.Item key={route.path} onClick={() => history.push(route.path)}>
              <strong>{route.title}</strong>
            </Menu.Item>
          ))}
        </Menu>
        <div className={styles.rightMenu}>
          <Space align="center" className={styles.buttons}>
            <Form.Item>
              <Input
                // value={search}
                className={styles.searchInput}
                // onChange={(e) => setSearch(e.target.value.replace(/[^a-zA-Z0-9_]/g, ''))}
                placeholder={'SEARCH'}
                suffix={<FontAwesomeIcon color="#788686" icon={faSearch as IconProp} className={styles.searchIcon} />}
              />
            </Form.Item>

            {!token ? (
              <>
                <Account triedToEagerConnect={triedToEagerConnect} />
                <Button type="link" onClick={() => dispatch(setAuthModal('login'))}>
                  REGISTER / LOG IN
                </Button>
              </>
            ) : (
              <>
                <Button type="link">MY COLLECTION</Button>
                <ShoppingCartOutlined style={{ fontSize: '22px', marginLeft: '10px' }} />
                <UserOutlined
                  style={{ fontSize: '22px', marginLeft: '10px' }}
                  onClick={() => history.push('/profile/setting')}
                />
              </>
            )}
          </Space>
        </div>
      </div>
    </Layout.Header>
  );
};

export default NavbarDesktop;
