import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import S from './styles.module.css';

type MenuButtonProps = {
  to: string;
  label: string;
  isActive: boolean;
};
const MenuButton: React.FC<MenuButtonProps> = ({ to, label, isActive = false }: MenuButtonProps) => {
  return (
    <Link passHref href={to}>
      <a className={clsx(S.Root, isActive ? S.Active : '')}>{label}</a>
    </Link>
  );
};

export default MenuButton;
