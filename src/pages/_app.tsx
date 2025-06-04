import 'normalize.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>alyonium</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='alyonium, frontend developer, web developer, portfolio, Alena Stovpets'
        />
        <meta name='author' content='Alena Stovpets' />
        <meta
          name='description'
          content="I'm Alena, a frontend developer. Nice to meet you 🙂"
        />
        <meta property='og:title' content='alyonium' />
        <meta
          property='og:description'
          content="I'm Alena, a frontend developer. Nice to meet you 🙂"
        />
        <meta property='og:url' content='https://alyonium.github.io/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://alyonium.github.io/og-image.png'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
