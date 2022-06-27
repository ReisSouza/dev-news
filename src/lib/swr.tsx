import { ReactNode } from 'react';
import { SWRConfig, SWRConfiguration } from 'swr';
import { api } from './axios';

const swrFetcher = api.get;

const swrConfig: SWRConfiguration = {
  fetcher: swrFetcher,
};

type SWRProviderProps = {
  children: ReactNode;
};

export function SWRProvider({ children }: SWRProviderProps) {
  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
}
