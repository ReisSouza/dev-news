import { ReactNode } from 'react';
import { DefaultSeo } from 'next-seo';
import { StateContextProvider } from '@/hook/useStateContext';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt-BR',
          url: 'https://',
          site_name: '',
        }}
        twitter={{
          cardType: 'summary',
        }}
        titleTemplate="%s - "
        defaultTitle=""
      />
      <StateContextProvider>{children}</StateContextProvider>
    </>
  );
}
