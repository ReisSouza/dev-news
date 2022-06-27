import { RouterTypes } from '@/types';

export const routes = () => {
  const Routes: RouterTypes[] = [
    {
      id: 1,
      name: 'Home ',
      to: '/',
    },
    {
      id: 3,
      name: 'Quem Somos',
      to: '/quem somos',
    },
    {
      id: 3,
      name: 'Blog',
      to: '/blog',
    },
    {
      id: 4,
      name: 'Fale conosco',
      to: `/#contato`,
    },
  ];
  return Routes;
};
