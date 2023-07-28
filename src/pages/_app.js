import '@/styles/globals.css';
import { ConfigProvider } from 'antd';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ConfigProvider>{getLayout(<Component {...pageProps} />)}</ConfigProvider>
  );
}
