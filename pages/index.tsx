// import { NextPage } from 'next';
// import { useEffect, useState } from 'react';
import { useLaunchListQuery } from '../graphql/generated/schema';

// export async function getServerSideProps() {
//   return {
//     props: {
//       data: data?.launchesPast,
//     },
//   };
// }

// const Home: NextPage = () => {
//   const { data } = useLaunchListQuery();
//
//   useEffect(() => {
//     console.log(data);
//   }, [data]);
//
//   return (
//     <section>
//       <div>Test</div>
//     </section>
//   );
// };
//
// export default Home;

export default function IndexPage() {
  const { data, loading, error } = useLaunchListQuery();

  console.log({ data, loading, error });

  if (loading) return 'Loading...';

  return <div>Completed: {data?.launchesPast?.length}</div>;
}
