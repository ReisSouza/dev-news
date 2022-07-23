import React from 'react';

import { BannerHome, DescriptionHome } from '@/features';
import { ProductType } from '@/types';

type HomeProps = {
  product: ProductType;
};
const Home: React.FC<HomeProps> = ({ product }: HomeProps) => {
  return (
    <div className=" flex w-full max-w-[69.25rem] mx-auto justify-between h-[calc(100vh-80px)] items-center">
      <DescriptionHome product={product} />
      <BannerHome />
    </div>
  );
};

export default Home;
