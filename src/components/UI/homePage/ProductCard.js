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
          <div style={{ height: 250, width: '100%', position: 'relative' }}>
            <Image
              fill={true}
              objectFit="cover"
              alt="example"
              src={`/images/products/${data?.image}`}
              style={{ position: 'absolute' }}
            />
          </div>
        }
      >
        <Meta title={data?.name} description={data?.category} />

        <div style={{ paddingTop: 15 }}>
          <Paragraph>
            Price: <span style={{ fontWeight: 700 }}>{data?.price}</span>
          </Paragraph>
          <Paragraph>
            Status:{' '}
            <span
              style={{
                color: data?.status === 'Out of Stock' ? 'red' : 'green',
              }}
            >
              {data?.status}
            </span>
          </Paragraph>
          <Rate disabled defaultValue={data?.rating} />
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
