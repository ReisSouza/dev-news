import { Blog } from '@/screen';
import { createClient } from '@/services';
import { PostType } from '@/types/post';
import Head from 'next/head';
import React from 'react';
type BlogPagesProps = {
  posts: PostType[];
};
const BlogPage: React.FC<BlogPagesProps> = ({ posts }: BlogPagesProps) => {
  return (
    <>
      <Head>
        <title>Blog | Dev News</title>
      </Head>
      <Blog posts={posts} />
    </>
  );
};

export default BlogPage;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const data = await client.getAllByType('publication', {
    fetch: ['publication.title', 'publication.body'],
  });
  const posts = data.map((post) => {
    return {
      slug: post.uid,
      title: post.data.title,
      excerpt: post.data.body.find((item) => item.type === 'paragraph').text ?? '',
      updated: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return {
    props: {
      posts,
    }, // Will be passed to the page component as props
  };
}
