import * as React from 'react';

import S from './styles.module.css';

type Align = 'left' | 'center' | 'right';
type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type Colors = 'primary' | 'secondary' | 'white';
type Component = 'heading1' | 'heading2' | 'heading3' | 'paragraph1' | 'paragraph2' | 'paragraph3';
const ColorsMap = {
  primary: S.TypographyPrimary,
  secondary: S.TypographySecondary,
  white: S.TypographyWhite,
};
const AlignMap = {
  left: S.TypographyAlignLeft,
  center: S.TypographyAlignCenter,
  right: S.TypographyAlignRight,
};
const sizeMap = {
  heading1: S.TypographySizeHeading1,
  heading2: S.TypographySizeHeading2,
  heading3: S.TypographySizeHeading3,
  paragraph1: S.TypographySizeParagraph1,
  paragraph2: S.TypographySizeParagraph2,
  paragraph3: S.TypographySizeParagraph3,
};
const AsMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
};
const borderColorPrimaryClasses = S.TypographyBorderColorPrimary;
const borderColorSecondaryClasses = S.TypographyBorderColorSecondary;
const BorderMap = {
  primary: borderColorPrimaryClasses,
  secondary: borderColorSecondaryClasses,
  white: '',
};
type TypographyProps = {
  children: React.ReactNode;
  component?: Component;
  color?: Colors;
  border?: boolean;
  as?: As;
  align?: Align;
  className?: string;
} & JSX.IntrinsicElements['h1'];

function Typography({
  component = 'paragraph2',
  border = false,
  className = '',
  as = 'p',
  color,
  align,
  children,
  ...other
}: TypographyProps) {
  const size = component ? sizeMap[component] : sizeMap[as];
  const borderActive = [BorderMap[color], S.TypographyBorderActive];
  const PropsClassName = [
    border ? borderActive.join(' ') : undefined,
    S.root,
    ColorsMap[color],
    size,
    AlignMap[align],
    className,
  ];
  const type = AsMap[as];
  return React.createElement(type, { className: PropsClassName.join(' '), color, component, ...other }, children);
}
export default Typography;
