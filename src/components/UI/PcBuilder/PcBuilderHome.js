import { Grid, Col, Row, Typography, Button, notification } from 'antd';
import BuilderCategory from './BuilderCategory';
import { allCategories } from '@/assets/data';
import { useSelector } from 'react-redux';

const { useBreakpoint } = Grid;
const { Title, Paragraph, Text } = Typography;

const PcBuilderHome = () => {
  const [api, contextHolder] = notification.useNotification();
  const { xs } = useBreakpoint();
  const builderData = useSelector((state) => state.builder.data);
  const filteredData = Object.values(builderData).filter((el) => el);

  const amountCount = filteredData?.reduce(
    (total, item) => total + parseFloat(item.price ? item.price : 0),
    0
  );

  // handle complete
  const handleComplete = () => {
    api.open({
      message: 'Great!!! Successfully Build',
      description:
        'You completed building your own computer from our PC House - Thank You',
      duration: 3,
    });
  };
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
                  {amountCount} tk
                </Paragraph>
                <Paragraph
                  style={{
                    margin: 0,
                    fontSize: 12,
                    color: '#fff',
                    textAlign: 'center',
                  }}
                >
                  {filteredData?.length} Items
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

          <div style={{ textAlign: 'center' }}>
            {contextHolder}
            <Button
              type="primary"
              size="large"
              disabled={filteredData?.length === 6 ? false : true}
              onClick={handleComplete}
            >
              Complete Build
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderHome;
