import data from '@/assets/db.json';

const handler = (req, res) => {
  const { id } = req.query;
  const singleProduct = data.accessories?.find((el) => el.id === id);

  res.status(200).json(singleProduct);
};

export default handler;
