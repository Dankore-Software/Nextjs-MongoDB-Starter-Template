import Layout from './components/shared/layouts';
import Homepage from './components/homepage';
import { connectToDatabase } from '../util/mongodb';

export default function Home({ isConnected }) {
  return (
    <Layout>
      <Homepage props={isConnected} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const { client } = await connectToDatabase();
  const isConnected = await client.isConnected();

  return {
    props: {
      isConnected,
    },
  };
}
