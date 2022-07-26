import {
  addApolloState,
  initializeApollo,
} from '../apollo/client/apolloClient';
import {
  LaunchListDocument,
  useLaunchListQuery,
} from '../graphql/generated/schema';

export default function IndexPage() {
  const { data, loading, error } = useLaunchListQuery();
  console.log({ data, loading, error });

  if (loading) return 'Loading...';

  return <div>Completed: {data?.launchesPast?.length}</div>;
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
