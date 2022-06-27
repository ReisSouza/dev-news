import * as React from 'react';

import { useRouter } from 'next/router';
import S from './styles.module.css';
import Logo from '@/components/Logo/Logo';
import imageLogo from '@/assets/images/logo.png';
import ButtonAuth from '../ButtonAuth/ButtonAuth';
import MenuButton from '../MenuButton/MenuButton';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={S.Root}>
      <div className={S.Toolbar}>
        <div className={S.WrappedNavigation}>
          <Logo width={137} height={38} src={imageLogo} />
          <nav className={S.Navigation}>
            <MenuButton label="Home" to="/" isActive={router.asPath === '/'} />
            <MenuButton label="Blog" to="/blog" isActive={router.asPath === '/blog'} />
          </nav>
        </div>
        <ButtonAuth name="Reis Souza" isAuthenticated={false} onPress={() => {}} />
      </div>
    </nav>
  );
};
export default Navbar;
