import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { AppProvider } from '@/context';
import Analytics from '@/lib/Analytics';
import MainLayout from '@/Layout/MainLayout';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AppProvider>
      <SessionProvider session={session}>
        <Analytics />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </SessionProvider>
    </AppProvider>
  );
}

export default MyApp;
