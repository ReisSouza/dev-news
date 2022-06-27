import '@/styles/globals.css';
import { AppProvider } from '@/context';
import Analytics from '@/lib/Analytics';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Analytics />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
