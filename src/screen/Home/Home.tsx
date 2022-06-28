import React from 'react';

import MainLayout from '@/components/Layout/MainLayout';
import { BannerHome, DescriptionHome } from '@/features';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className=" flex w-full max-w-[69.25rem] mx-auto justify-between h-[calc(100vh-80px)] items-center">
        <DescriptionHome />
        <BannerHome />
      </div>
    </MainLayout>
  );
};

export default Home;
