import data from '@/assets/db.json';

const handler = (req, res) => {
  const { category } = req.query;
  const categoriesData = data.accessories?.filter(
    (el) => el.catId === category
  );

  res.status(200).json(categoriesData);
};

export default handler;
