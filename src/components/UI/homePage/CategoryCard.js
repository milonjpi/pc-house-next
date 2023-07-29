import { Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Meta } = Card;

const CategoryCard = ({ data }) => {
  return (
    <Link href={`/categories/${data?.id}`}>
      <Card
        hoverable
        cover={
          <div
            style={{
              height: 250,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              width={150}
              height={150}
              alt={data?.catId || 'category'}
              src={data?.image}
            />
          </div>
        }
      >
        <Meta title={data?.label} />
      </Card>
    </Link>
  );
};

export default CategoryCard;
