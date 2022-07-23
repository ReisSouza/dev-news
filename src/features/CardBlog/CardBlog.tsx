import React, { useState } from 'react';
import Link from 'next/link';

// import { Container } from './styles';
import { PostType } from '@/types/post';
import { Typography } from '@/components';

type CardBlogProps = {
  post: PostType;
};
const CardBlog: React.FC<CardBlogProps> = ({ post }: CardBlogProps) => {
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  return (
    <Link passHref href={`post/${post.slug}`} prefetch>
      <a>
        <div
          className="pb-8 border-b-2 border-[#323238] max-w-[728px] mx-auto font-light"
          onMouseEnter={() => setOnMouseEnter(true)}
          onMouseLeave={() => setOnMouseEnter(false)}
        >
          <time className="text-[#A8A8B3]">{post.updated}</time>
          <Typography
            as="h2"
            component="heading3"
            className="pt-4 pb-1 transition-colors duration-150 ease-in-out"
            color={onMouseEnter ? 'primary' : 'white'}
          >
            {post.title}
          </Typography>
          <Typography as="p" component="paragraph2" className="text-[#A8A8B3] font-light">
            {post.excerpt}
          </Typography>
        </div>
      </a>
    </Link>
  );
};

export default CardBlog;
