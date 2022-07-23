import React from 'react';

import { PostType } from '@/types';
import { Typography } from '@/components';

import S from './styles.module.css';
type PostProps = {
  post: PostType;
};
const Post: React.FC<PostProps> = ({ post }: PostProps) => {
  return (
    <div className={S.Container}>
      <Typography as="h1" component="heading2" color="white" className={S.Title}>
        {post.title}
      </Typography>
      <time className={S.Time}>{post.updated}</time>
      <div dangerouslySetInnerHTML={{ __html: post.content }} className={S.Body} />
    </div>
  );
};

export default Post;
