import data from '@/assets/db.json';

const handler = (req, res) => {
  res.status(200).json(data.Accessories);
};

export default handler;
