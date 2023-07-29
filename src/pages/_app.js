import store from '@/redux/store';
import '@/styles/globals.css';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Provider store={store}>
      <ConfigProvider>{getLayout(<Component {...pageProps} />)}</ConfigProvider>
    </Provider>
  );
}
