import React from 'react';
import { RichText } from 'prismic-dom';
import { getSession } from 'next-auth/react';
import { GetServerSideProps, NextPage } from 'next';

import { Post } from '@/screen';
import { PostType } from '@/types';
import { createClient } from '@/services';

type PostPagesProps = {
  post: PostType;
};
const PostsPages: NextPage<PostPagesProps> = ({ post }: PostPagesProps) => {
  return <Post post={post} />;
};

export default PostsPages;

export const getServerSideProps: GetServerSideProps = async ({ previewData, params, req }) => {
  const session = await getSession({ req });
  if (!session) {
  }
  const client = createClient({ previewData });
  const response = await client.getByUID('publication', params.slug as string, {});
  const post: PostType = {
    slug: params.slug as string,
    title: response.data.title,
    content: RichText.asHtml(response.data.body),
    updated: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  };
  return {
    props: {
      post,
    },
  };
};
