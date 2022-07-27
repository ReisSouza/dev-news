import React, { useEffect } from 'react';
import { RichText } from 'prismic-dom';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Post } from '@/screen';
import { PostType } from '@/types';
import { createClient } from '@/services';

type PostPagesProps = {
  post: PostType;
};
const PostsPages: NextPage<PostPagesProps> = ({ post }: PostPagesProps) => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/post/${post.slug}`);
    }
  }, [session?.activeSubscription, post.slug]);
  return <Post post={post} />;
};

export default PostsPages;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ previewData, params }) => {
  const client = createClient({ previewData });
  const response = await client.getByUID('publication', params.slug as string, {});
  const post: PostType = {
    slug: params.slug as string,
    title: response.data.title,
    content: RichText.asHtml(response.data.body.splice(0, 3)),
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
    // revalidate: 60 * 30, //30 minutos
  };
};
