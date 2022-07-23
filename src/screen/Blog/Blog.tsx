import { CardBlog } from '@/features';
import React from 'react';

import S from './styles.module.css';

const Blog: React.FC = () => {
  return (
    <div className={S.Container}>
      <CardBlog />
    </div>
  );
};

export default Blog;
