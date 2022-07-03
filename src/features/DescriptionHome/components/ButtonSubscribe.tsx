import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import { ButtonBase } from '@/components';

import S from './styles.module.css';

type ButtonSubscribeProps = {
  priceId: string;
};
const ButtonSubscribe: React.FC<ButtonSubscribeProps> = ({ priceId }: ButtonSubscribeProps) => {
  const { data: session } = useSession();
  const handleSubscribe = () => {
    if (!session) {
      signIn('github');
    }
  };
  return (
    <ButtonBase className={S.BtnSubscribe} onClick={() => handleSubscribe()}>
      Subscribe now
    </ButtonBase>
  );
};

export default ButtonSubscribe;
