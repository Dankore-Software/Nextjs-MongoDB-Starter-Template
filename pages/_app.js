import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
