import { Typography } from '@/components';
import React, { useState } from 'react';

// import { Container } from './styles';

const CardBlog: React.FC = () => {
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  return (
    <div
      className="pb-8 border-b-2 border-[#323238] max-w-[728px] mx-auto font-light"
      onMouseEnter={() => setOnMouseEnter(true)}
      onMouseLeave={() => setOnMouseEnter(false)}
    >
      <time className="text-[#A8A8B3]">12 de março de 2022</time>
      <Typography
        as="h2"
        component="heading3"
        className="pt-4 pb-1 transition-colors duration-150 ease-in-out"
        color={onMouseEnter ? 'primary' : 'white'}
      >
        Creating a Monorepo with Lerna & Yarn Workspaces
      </Typography>
      <Typography as="p" component="paragraph2" className="text-[#A8A8B3] font-light">
        In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test,
        and release process.
      </Typography>
    </div>
  );
};

export default CardBlog;
