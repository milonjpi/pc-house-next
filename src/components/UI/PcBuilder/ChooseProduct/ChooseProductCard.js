import { setBuilder } from '@/redux/features/builderSlice';
import { Button, Card, Rate, Typography } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
const { Meta } = Card;

const { Paragraph } = Typography;

const ChooseProductCard = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleBuilder = () => {
    dispatch(setBuilder({ [data?.catId]: data }));
    router.push('/pc-builder');
  };
  return (
    <Card
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
      <div style={{ textAlign: 'center', paddingTop: 20 }}>
        <Button
          disabled={data?.status === 'Out of Stock' ? true : false}
          type="primary"
          onClick={handleBuilder}
          style={{ minWidth: 100 }}
          size="large"
        >
          Add To Builder
        </Button>
      </div>
    </Card>
  );
};

export default ChooseProductCard;
