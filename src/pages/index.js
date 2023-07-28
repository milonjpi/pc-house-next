import Head from 'next/head';
import { Button } from 'antd';
import RootLayout from '@/components/Layouts/RootLayout';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home - PC House</title>
        <meta name="description" content="Created by pc house bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
