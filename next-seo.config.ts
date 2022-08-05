import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default {
  title: publicRuntimeConfig.title,
  titleTemplate: '- %s',
  defaultTitle: publicRuntimeConfig.defaultTitle,
  description: publicRuntimeConfig.description,
  canonical: publicRuntimeConfig.baseUrl,
  noindex: false,
  openGraph: {
    type: 'website',
    locale: publicRuntimeConfig.locale,
    url: publicRuntimeConfig.baseUrl,
    site_name: publicRuntimeConfig.name,
    // images: [
    //   {
    //     url: '/static/image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: "Default image",
    //   },
    // ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#005288',
    },
    {
      name: 'msapplication-navbutton-color',
      content: '#005288',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'blue',
    },
  ],
};
