import { FC } from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import NavbarDesktop from './Desktop';

const Navbar: FC = () => {
  const screen = useBreakpoint();
  return <>{screen.md ? <NavbarDesktop /> : '<Mobile />'}</>;
};

export default Navbar;
