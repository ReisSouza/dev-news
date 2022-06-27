import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import Classes from './styles.module.css';

type LogoProps = {
  width: number;
  height: number;
} & ImageProps;
const Logo = ({ src, alt, width, height, ...other }: LogoProps) => {
  return (
    <Link href="/" passHref>
      <a className={Classes.root} style={{ width: `${width}px`, height: `${height}px` }} aria-label="logo Tua opinião">
        <Image src={src} alt={alt} {...other} layout="fill" objectFit="contain" />
      </a>
    </Link>
  );
};
export default Logo;
