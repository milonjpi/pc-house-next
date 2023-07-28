import { Card, Rate, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Meta } = Card;

const { Paragraph } = Typography;

const ProductCard = ({ data }) => {
  return (
    <Link href={`/product-details/${data?.id}`}>
      <Card
        hoverable
        cover={
          <div style={{ height: 250, position: 'relative' }}>
            <Image
              fill={true}
              objectFit="cover"
              alt="example"
              src="/images/product.png"
              style={{ position: 'absolute' }}
            />
          </div>
        }
      >
        <Meta title={data?.Name} description={data?.Category} />

        <div style={{ paddingTop: 15 }}>
          <Paragraph>
            Price: <span style={{ fontWeight: 700 }}>{data?.Price}</span>
          </Paragraph>
          <Paragraph>
            Status:{' '}
            <span
              style={{
                color: data?.Status === 'Out of Stock' ? 'red' : 'green',
              }}
            >
              {data?.Status}
            </span>
          </Paragraph>
          <Rate disabled defaultValue={data?.Rating} />
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
