import { allCategories } from '@/assets/data';
import RootLayout from '@/components/Layouts/RootLayout';
import ProductContainer from '@/components/UI/homePage/ProductContainer';
import Head from 'next/head';
import React from 'react';

const CategoriesDetails = ({ title, products }) => {
  return (
    <>
      <Head>
        <title>Categories Details - PC House</title>
        <meta name="description" content="Created by pc house bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductContainer
        title={products[0]?.category || 'Nothing Found'}
        products={products}
      />
    </>
  );
};

export default CategoriesDetails;

CategoriesDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const paths = allCategories.map((category) => ({
    params: { category: category.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const category = params.category;
  const res = await fetch(`http://localhost:3000/api/categories/${category}`);
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
