import Head from 'next/head';
import { connectToDatabase } from '../util/mongodb';
import Layout from './components/shared/layouts';
import Homepage from './components/homepage';

export default function Home({ isConnected }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
      <div className="text-center">
        {isConnected ? 'MongoDB is connected' : 'MongoDB is not connected'}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { db, client } = await connectToDatabase();
  const customersCollection = await db.collection('customers');
  const customers = await customersCollection.find({}).toArray();

  // CHECK DB CONNECTION
  const isConnected = await client.isConnected();

  return {
    props: {
      customers: JSON.parse(JSON.stringify(customers)),
      isConnected,
    },
  };
}
