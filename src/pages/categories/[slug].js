import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const CategoriesDetails = () => {
  return (
    <>
      <Head>
        <title>Categories Details - PC House</title>
        <meta name="description" content="Created by pc house bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Categories Details</p>
    </>
  );
};

export default CategoriesDetails;

CategoriesDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
