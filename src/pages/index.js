import Head from 'next/head';
import { Button } from 'antd';
import RootLayout from '@/components/Layouts/RootLayout';
import FeaturedProduct from '@/components/UI/homePage/FeaturedProduct';
import FeaturedCategories from '@/components/UI/homePage/FeaturedCategories';

const HomePage = ({ products }) => {
  return (
    <>
      <Head>
        <title>Home - PC House</title>
        <meta name="description" content="Created by pc house bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedProduct products={products} />
      <FeaturedCategories />
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
