import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();
  console.log({ db });

  const customers = await db.collection('customers').find({}).toArray();

  res.json({ customers });
};
