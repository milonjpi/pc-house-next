import RootLayout from '@/components/Layouts/RootLayout';
import ChooseProduct from '@/components/UI/PcBuilder/ChooseProduct';
import Head from 'next/head';
import React from 'react';

const BuilderChooserPage = ({ products }) => {
  return (
    <>
      <Head>
        <title>Choose Product - PC House</title>
        <meta name="description" content="Created by pc house bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChooseProduct
        title={products[0]?.category || 'Nothing Found'}
        products={products}
      />
    </>
  );
};

export default BuilderChooserPage;

BuilderChooserPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async ({ params }) => {
  const category = params.category;
  const res = await fetch(
    `https://pc-house-milonjpi.vercel.app/api/categories/${category}`
  );
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
