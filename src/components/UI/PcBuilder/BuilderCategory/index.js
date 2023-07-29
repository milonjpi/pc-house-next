import { Typography, Button } from 'antd';
import Link from 'next/link';
import ChosenItem from './ChosenItem';
import { useSelector } from 'react-redux';

const { Paragraph } = Typography;

const BuilderCategory = ({ data }) => {
  const chosenData = useSelector((state) => state.builder.data[data?.id]);
  return (
    <div
      style={{
        paddingBottom: 15,
        marginBottom: 15,

        borderBottom: '1px solid #dcdedd',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flex: 1 }}>
          <div
            style={{
              height: 60,
              width: 60,
              background: '#dcdedd',
              borderRadius: 5,
              marginRight: 10,
            }}
          ></div>
          <div style={{ flex: 1, padding: '5px 0' }}>
            <Paragraph style={{ fontSize: 16, marginBottom: 5 }}>
              {data?.label}{' '}
              <span
                style={{
                  display: 'inline-block',
                  background: '#dcdedd',
                  fontSize: 10,
                  padding: '0 5px',
                  borderRadius: 2,
                  verticalAlign: 'top',
                }}
              >
                Required
              </span>
            </Paragraph>
            <Paragraph
              style={{
                width: '80%',
                background: '#dcdedd',
                height: 15,
                borderRadius: 3,
              }}
            ></Paragraph>
          </div>
        </div>

        <Link href={`/pc-builder/${data?.id}`}>
          <Button type="primary" ghost disabled={chosenData ? true : false}>
            Choose
          </Button>
        </Link>
      </div>
      {chosenData ? <ChosenItem chosenData={chosenData} /> : null}
    </div>
  );
};

export default BuilderCategory;
