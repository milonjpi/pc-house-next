import data from '@/assets/db.json';

const handler = (req, res) => {
  const { id } = req.query;
  const categoriesData = data.Accessories?.filter((el) => el.Category === id);

  res.status(200).json(categoriesData);
};

export default handler;
