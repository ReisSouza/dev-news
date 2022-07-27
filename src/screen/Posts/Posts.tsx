import React from 'react';
import Link from 'next/link';

import { PostType } from '@/types';
import { Typography } from '@/components';

import S from './styles.module.css';
import clsx from 'clsx';
import Button from '@/components/ButtonBase/ButtonBase';
import { useRouter } from 'next/router';

type PostProps = {
  post: PostType;
};

const Post: React.FC<PostProps> = ({ post }: PostProps) => {
  const router = useRouter();
  return (
    <div>
      <div className={S.Container}>
        <Typography as="h1" component="heading2" color="white" className={S.Title}>
          {post.title}
        </Typography>
        <time className={S.Time}>{post.updated}</time>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className={clsx(S.Body, router.asPath === '/post/preview' ?? S.Preview)}
        />
        {router.asPath === '/post/preview' ?? (
          <Link passHref href="/">
            <Button className={S.ButtonSubscribre} as="a">
              Wanna continue reading? Subscribe now
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Post;
