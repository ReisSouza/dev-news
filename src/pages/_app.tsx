import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { AppProvider } from '@/context';
import Analytics from '@/lib/Analytics';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AppProvider>
      <SessionProvider session={session}>
        <Analytics />
        <Component {...pageProps} />
      </SessionProvider>
    </AppProvider>
  );
}

export default MyApp;
