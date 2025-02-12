import Head from 'next/head';

import Layout from '../components/layout/layout';
import { NotificationContextProvider } from '../store/notification-context';
import '../styles/globals.css';
import '../styles/index-react.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';


function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name='description' content='NextJS Events' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>

      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
