import { ReactNode } from 'react';
import NavBar from './components/NavBar';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
