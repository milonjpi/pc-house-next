import data from '@/assets/db.json';

const handler = (req, res) => {
  res.status(200).json(data.accessories);
};

export default handler;
