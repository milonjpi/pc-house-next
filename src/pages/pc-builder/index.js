import RootLayout from '@/components/Layouts/RootLayout';
import PcBuilderHome from '@/components/UI/PcBuilder/PcBuilderHome';
import Head from 'next/head';
import React from 'react';

const PCBuilderPage = () => {
  return (
    <>
      <Head>
        <title>PC Builder - PC House</title>
        <meta name="description" content="Created by pc house bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PcBuilderHome />
    </>
  );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
