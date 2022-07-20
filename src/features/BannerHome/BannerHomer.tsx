import React from 'react';
import Image from 'next/image';

import S from './styles.module.css';
import imageBanner from '@/assets/images/img1.png';

const BannerHome: React.FC = () => {
  return (
    <div className={S.Root}>
      <Image src={imageBanner} alt="" />
    </div>
  );
};

export default BannerHome;
