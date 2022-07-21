import { NextPage } from 'next';

const Home: NextPage = ({ launches }) => {
  console.log(launches);
  return (
    <section>
      <div>Test</div>
    </section>
  );
};

export default Home;
