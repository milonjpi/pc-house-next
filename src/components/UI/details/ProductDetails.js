import { Avatar, Col, Rate, Row, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';

const { Title, Paragraph } = Typography;

const ProductDetails = ({ product }) => {
  const keyFeatures = product?.keyFeatures?.split(', ');
  return (
    <div style={{ padding: '100px 0' }}>
      <Row gutter={[48, 64]}>
        <Col xs={24} md={12}>
          <div style={{ width: '100%', height: 500, position: 'relative' }}>
            <Image
              src={`/images/products/${product?.image}`}
              fill={true}
              style={{ position: 'absolute' }}
              objectFit="cover"
              alt="product photo"
            />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div>
            <Title level={3}>{product?.name}</Title>
            <Paragraph>
              Category:{' '}
              <span style={{ color: '#666666' }}>{product?.category}</span>
            </Paragraph>
            <div style={{ paddingTop: 15 }}>
              <Paragraph style={{ paddingBottom: 15 }}>
                Price: <span style={{ fontWeight: 700 }}>{product?.price}</span>
              </Paragraph>
              <Paragraph style={{ marginBottom: 25 }}>
                Status:{' '}
                <span
                  style={{
                    color: product?.status === 'Out of Stock' ? 'red' : 'green',
                  }}
                >
                  {product?.status}
                </span>
              </Paragraph>
              <div style={{ marginBottom: 25 }}>
                <Paragraph style={{ margin: 0 }}>
                  Individual Rating: {product?.rating}
                </Paragraph>
                <Rate disabled defaultValue={product?.rating} />
              </div>
              <div>
                <Paragraph style={{ margin: 0 }}>
                  Average Rating: {product?.averageRating}
                </Paragraph>
                <Rate disabled defaultValue={product?.rating} />
              </div>
            </div>
            <div>
              <Title level={4} style={{ fontWeight: 700 }}>
                Description:
              </Title>
              <Paragraph>{product?.description}</Paragraph>
            </div>
          </div>
        </Col>
        <Col xs={24}>
          <div>
            <Title
              level={4}
              style={{ fontWeight: 700, borderBottom: '1px solid #d9d8d8' }}
            >
              Key Features:
            </Title>
            {keyFeatures?.map((el, index) => (
              <Paragraph key={index}>{index + 1 + '. ' + el}</Paragraph>
            ))}
          </div>
        </Col>
        <Col xs={24}>
          <div>
            <Title level={2}>Reviews:</Title>
            {product?.reviews?.map((el, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingBottom: 20,
                }}
              >
                <Avatar size={40} icon={<UserOutlined />} />
                <Paragraph style={{ margin: 0, paddingLeft: 10 }}>
                  {el.comment}
                </Paragraph>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
