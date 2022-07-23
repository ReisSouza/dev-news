import React from 'react';

import S from './styles.module.css';
import { CardBlog } from '@/features';
import { PostType } from '@/types/post';

type BlogProps = {
  posts: PostType[];
};
const Blog: React.FC<BlogProps> = ({ posts }: BlogProps) => {
  return (
    <div className={S.Container}>
      {posts.map((post) => {
        return <CardBlog post={post} key={post.slug} />;
      })}
    </div>
  );
};

export default Blog;
