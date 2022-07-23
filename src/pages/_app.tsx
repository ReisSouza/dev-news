import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { AppProvider } from '@/context';
import Analytics from '@/lib/Analytics';
import MainLayout from '@/Layout/MainLayout';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '@/services/prismic';
import Link from 'next/link';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <AppProvider>
          <SessionProvider session={session}>
            <Analytics />
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </SessionProvider>
        </AppProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
