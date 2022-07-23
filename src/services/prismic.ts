import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import sm from '../../sm.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case '/':
      return '/';
    case 'blog':
      return `/blog`;
    case 'pots':
      return `/posts/${doc.uid}`;
    default:
      return null;
  }
}

// This factory function allows smooth preview setup
export default function createClient(config = {} as any) {
  const client = prismic.createClient(endpoint, {
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
