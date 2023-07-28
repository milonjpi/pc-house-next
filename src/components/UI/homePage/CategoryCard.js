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
          <div style={{ height: 250, width: '100%', position: 'relative' }}>
            <Image
              layout="fill"
              objectFit="cover"
              alt="example"
              src="/images/product.png"
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
