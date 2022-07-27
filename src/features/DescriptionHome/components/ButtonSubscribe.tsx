import React from 'react';
import { signIn, useSession } from 'next-auth/react';

import { api } from '@/lib/axios';
import { getStripeJs } from '@/services';

import S from './styles.module.css';
import { ButtonBase } from '@/components';
import { useRouter } from 'next/router';

type ButtonSubscribeProps = {
  priceId: string;
};
const ButtonSubscribe: React.FC<ButtonSubscribeProps> = ({ priceId }: ButtonSubscribeProps) => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(priceId);
  const handleSubscribe = async () => {
    if (!session) {
      signIn('github');
    }
    if (session && session?.activeSubscription) {
      router.push('/blog');
      return;
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
      {session?.activeSubscription ? 'go to blog' : !session ? 'sign in github' : 'Subscribe now'}
    </ButtonBase>
  );
};

export default ButtonSubscribe;
