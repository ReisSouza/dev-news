import React from 'react';
import { signIn, useSession } from 'next-auth/react';

import { api } from '@/lib/axios';
import { getStripeJs } from '@/services';

import S from './styles.module.css';
import { ButtonBase } from '@/components';

type ButtonSubscribeProps = {
  priceId: string;
};
const ButtonSubscribe: React.FC<ButtonSubscribeProps> = ({ priceId }: ButtonSubscribeProps) => {
  const { data: session } = useSession();
  console.log(priceId);
  const handleSubscribe = async () => {
    if (!session) {
      signIn('github');
    }
    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <ButtonBase className={S.BtnSubscribe} onClick={() => handleSubscribe()}>
      Subscribe now
    </ButtonBase>
  );
};

export default ButtonSubscribe;
