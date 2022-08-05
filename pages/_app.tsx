import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { DefaultSeo } from 'next-seo';
import { useApollo } from '../apollo/client/apolloClient';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const styledTheme = {
    mainColor: '#0b4987',
    redColor: '#cd0000',
    grayColor: '#999',
    whiteColor: '#fff',
    blackColor: '#000000',
    textColor: '#081f69',
    headingColor: '#2f2f2f',
    space: ['1rem', '2rem', '3rem', '4rem'],
  };
  const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
`;

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={styledTheme}>
        <GlobalStyle />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
