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
          content='Frontend developer with 5 years of experience, mainly in JavaScript/Typescript (React, Vue). Proven background in commercial software development and freelance projects. Skilled in Figma and UI design. Graduated in 2023 with a degree in Software Engineering from Baltic State Technical University. Fluent in Russian (native), intermediate English (B1). Looking for a remote middle frontend developer position with English or Russian communication. Authorized to work in Spain and the EU.'
        />
        <meta property='og:title' content='alyonium' />
        <meta
          property='og:description'
          content='Frontend developer with 5 years of experience, mainly in JavaScript/Typescript (React, Vue). Proven background in commercial software development and freelance projects. Skilled in Figma and UI design. Graduated in 2023 with a degree in Software Engineering from Baltic State Technical University. Fluent in Russian (native), intermediate English (B1). Looking for a remote middle frontend developer position with English or Russian communication. Authorized to work in Spain and the EU.'
        />
        <meta property='og:url' content='https://alyonium.github.io/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://alyonium.github.io/og-image.png'
        />
        <meta
          name='google-site-verification'
          content='HrstD_Uoa8Eb9pvsadWH6teoRTO6T6UZllaG2GjznVs'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
