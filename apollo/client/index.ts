import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { useMemo } from 'react';

export const useClient = () => {
  const client = useMemo(
    () =>
      new ApolloClient({
        ssrMode: true,
        link: createHttpLink({
          uri: 'https://api.spacex.land/graphql/',
          credentials: 'same-origin',
        }),
        cache: new InMemoryCache(),
      }),
    []
  );

  return client;
};
