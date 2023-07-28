import { Col, Row, Typography } from 'antd';
const { Title } = Typography;
import styles from '@/styles/Home.module.css';
import ProductCard from './ProductCard';

const FeaturedProduct = ({ products }) => {
  return (
    <div className={styles.container}>
      <Title className={styles.heading}>Featured Product</Title>
      <Row gutter={[24, 64]}>
        {products?.slice(0, 8).map((product) => (
          <Col key={product.id} xs={24} md={12} lg={8} xl={6}>
            <ProductCard data={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedProduct;
