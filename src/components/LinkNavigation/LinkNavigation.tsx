import * as React from 'react';
import Link from 'next/link';

import ButtonBase, { ButtonProps } from '../ButtonBase/ButtonBase';

type LinkNavigationProps = {
  href: string;
  children: React.ReactNode;
  targetBlank?: boolean;
  arial: string;
} & ButtonProps<'a'>;

const LinkNavigation: React.FC<LinkNavigationProps> = ({
  href,
  children,
  targetBlank,
  arial,
  ...other
}: LinkNavigationProps) => {
  return (
    <Link href={href} passHref>
      <ButtonBase
        as="a"
        target={targetBlank ? '_blank' : '_self'}
        rel="noreferrer noopener"
        aria-label={arial}
        {...other}
      >
        {children}
      </ButtonBase>
    </Link>
  );
};
export default LinkNavigation;
