import store from '@/redux/store';
import '@/styles/globals.css';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <ConfigProvider>
          {getLayout(<Component {...pageProps} />)}
        </ConfigProvider>
      </Provider>
    </SessionProvider>
  );
}
