import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';

import { Home } from '@/screen';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dev News</title>
      </Head>
      <Home />
    </>
  );
};
export default HomePage;
export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
