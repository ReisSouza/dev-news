import React from 'react';
import { ButtonBase, Typography } from '@/components';

import S from './styles.module.css';

const DescriptionHome: React.FC = () => {
  return (
    <div className={S.Root}>
      <Typography as="span" component="heading3" color="white">
        Hey, welcome
      </Typography>
      <Typography as="h1" component="heading1" className={S.Title} color="white">
        News about the <span>React</span> world
      </Typography>
      <Typography as="p" component="paragraph1" className={S.Paragraph} color="white">
        Get access to all the publications <span>for $9,90 month</span>
      </Typography>
      <ButtonBase className={S.BtnSubscribe}>Subscribe now</ButtonBase>
    </div>
  );
};

export default DescriptionHome;
