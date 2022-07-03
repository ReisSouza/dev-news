import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';

import { Home } from '@/screen';
import { stripe } from '@/services';
import { ProductType } from '@/types';

type HomePageProps = {
  product: ProductType;
};
const HomePage: NextPage<HomePageProps> = ({ product }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Dev News</title>
      </Head>
      <Home product={product} />
    </>
  );
};
export default HomePage;
export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1LFkutFRPzFhMiW5dU2u6fD2', {
    expand: ['product'],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };
  return { props: { product } };
};
