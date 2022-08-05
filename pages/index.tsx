import styled from 'styled-components';
import {
  addApolloState,
  initializeApollo,
} from '../apollo/client/apolloClient';
import {
  LaunchListDocument,
  useLaunchListQuery,
} from '../graphql/generated/schema';

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export default function IndexPage() {
  const { data, loading, error } = useLaunchListQuery();
  console.log({ data, loading, error });

  if (loading) return 'Loading...';

  return (
    <>
      <Title>Hello Next.js</Title>
      Completed: {data?.launchesPast?.length}
    </>
  );
}

// export async function getServerSideProps() {
export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: LaunchListDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}
