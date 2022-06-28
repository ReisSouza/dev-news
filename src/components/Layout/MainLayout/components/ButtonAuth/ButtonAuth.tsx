import React from 'react';
import clsx from 'clsx';
import { FaGithub } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';

import Button from '@/components/ButtonBase/ButtonBase';
import S from './styles.module.css';

type ButtonAuthProps = {
  isAuthenticated: boolean;
  name: string;
  onPress: () => void;
};
const ButtonAuth: React.FC<ButtonAuthProps> = ({ name, onPress, isAuthenticated = true }: ButtonAuthProps) => {
  return (
    <Button className={clsx(S.Root, isAuthenticated ? S.Authenticated : '')} onClick={() => onPress()}>
      <FaGithub size={22} />
      {isAuthenticated ? name : 'Sign in with GitHub'}
      {isAuthenticated && <RiCloseFill size={22} />}
    </Button>
  );
};

export default ButtonAuth;
