import { Grid, Col, Row, Typography, Button, Skeleton } from 'antd';
import BuilderCategory from './BuilderCategory';
import { allCategories } from '@/assets/data';
import { useSelector } from 'react-redux';

const { useBreakpoint } = Grid;
const { Title, Paragraph, Text } = Typography;

const PcBuilderHome = () => {
  const { xs } = useBreakpoint();
  const builderData = useSelector((state) => state.builder.data);
  console.log(builderData);
  return (
    <div
      style={{
        padding: '50px 0',
      }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: 'auto',
          border: '1px solid #c3c8eb',
        }}
      >
        <div
          style={{ padding: '20px 25px', borderBottom: '1px solid #c3c8eb' }}
        >
          <Title level={2} style={{ margin: 0 }}>
            PC HOUSE.
          </Title>
        </div>
        <div style={{ padding: xs ? 20 : '20px 50px' }}>
          <Row gutter={[12, 24]} style={{ alignItems: 'center' }}>
            <Col xs={24} sm={12}>
              <Paragraph
                style={{
                  margin: 0,
                  color: '#614cab',
                  textAlign: xs ? 'center' : 'left',
                }}
              >
                PC Builder - Build your Own PC
              </Paragraph>
            </Col>
            <Col xs={24} sm={12} style={{ textAlign: xs ? 'center' : 'right' }}>
              <div
                style={{
                  width: 150,
                  display: 'inline-block',
                  padding: 8,
                  background: '#614cab',
                  borderRadius: 5,
                }}
              >
                <Paragraph
                  style={{
                    margin: 0,
                    fontSize: 16,
                    color: '#fff',
                    textAlign: 'center',
                  }}
                >
                  350 tk
                </Paragraph>
                <Paragraph
                  style={{
                    margin: 0,
                    fontSize: 12,
                    color: '#fff',
                    textAlign: 'center',
                  }}
                >
                  2 Items
                </Paragraph>
              </div>
            </Col>
          </Row>
          <Paragraph
            style={{
              marginTop: 25,
              background: '#808996',
              color: '#fff',
              padding: '2px 5px',
              fontSize: 12,
            }}
          >
            Core Components
          </Paragraph>
          {allCategories?.slice(0, 6).map((el) => (
            <BuilderCategory key={el.id} data={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PcBuilderHome;
