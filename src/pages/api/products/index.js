const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_CONNECTION_STRING;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const handler = async (req, res) => {
  try {
    const productsCollection = client.db('pcHouse').collection('products');
    if (req.method === 'GET') {
      const products = await productsCollection.find({}).toArray();
      res.status(200).json(products);
    }
  } finally {
    // await client.close();
  }
};

export default handler;
