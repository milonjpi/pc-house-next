import RootLayout from '@/components/Layouts/RootLayout';
import ProductDetails from '@/components/UI/details/ProductDetails';
import Head from 'next/head';
import React from 'react';

const ProductDetailsPage = ({ product }) => {
  return (
    <>
      <Head>
        <title>Product Details - PC House</title>
        <meta name="description" content="Created by pc house bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductDetails product={product} />
    </>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  const allProducts = await res.json();
  const paths = allProducts.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
