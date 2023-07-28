import { Col, Row, Typography } from 'antd';
const { Title } = Typography;
import styles from '@/styles/Home.module.css';
import { allCategories } from '@/assets/data';
import CategoryCard from './CategoryCard';

const FeaturedCategories = () => {
  return (
    <div className={styles.container}>
      <Title className={styles.heading}>Featured Categories</Title>
      <Row gutter={[24, 64]}>
        {allCategories?.slice(0, 6).map((cat) => (
          <Col key={cat.id} xs={24} sm={12} lg={8}>
            <CategoryCard data={cat} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedCategories;
