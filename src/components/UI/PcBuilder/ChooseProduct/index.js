import { Col, Row, Typography } from 'antd';
const { Title } = Typography;
import styles from '@/styles/Home.module.css';
import ChooseProductCard from './ChooseProductCard';

const ChooseProduct = ({ title, products }) => {
  return (
    <div className={styles.container}>
      <Title className={styles.heading}>
        Choose <span style={{ color: 'red' }}>{title}</span>
      </Title>
      <Row gutter={[24, 64]}>
        {products?.map((product) => (
          <Col key={product.id} xs={24} md={12} lg={8} xl={6}>
            <ChooseProductCard data={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ChooseProduct;
