import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { Home } from '@/screen';
import { PostType } from '@/types';
import getPosts from '@/api/Post/getPost';
import useRequest from '@/hook/useRequest';

type HomeProps = {
  fallbackData: PostType[];
};

const HomePage = ({ fallbackData }: HomeProps) => {
  const { data } = useRequest(
    {
      url: '/posts',
    },
    { fallbackData },
  );
  return (
    <>
      <Head>
        <title>Fill Boilerplate</title>
      </Head>
      <Home data={data} />
    </>
  );
};
export default HomePage;
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const Posts = await getPosts();
  return { props: { fallbackData: Posts } };
};
