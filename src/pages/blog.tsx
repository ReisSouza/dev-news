import { Blog } from '@/screen';
import Head from 'next/head';
import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blog | Dev News</title>
      </Head>
      <Blog />
    </>
  );
};

export default BlogPage;
