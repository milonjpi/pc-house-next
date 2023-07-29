import RootLayout from '@/components/Layouts/RootLayout';
import LoginView from '@/components/UI/LoginView';
import Head from 'next/head';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login - PC House</title>
        <meta name="description" content="Created by pc house bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginView />
    </>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
