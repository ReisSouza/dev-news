import * as React from 'react';
import Link from 'next/link';

import { Button } from '..';
import { ButtonProps } from '../ButtonBase/Button';

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
      <Button as="a" target={targetBlank ? '_blank' : '_self'} rel="noreferrer noopener" aria-label={arial} {...other}>
        {children}
      </Button>
    </Link>
  );
};
export default LinkNavigation;
