import { Typography, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setBuilder } from '@/redux/features/builderSlice';

const { Paragraph, Text } = Typography;

const ChosenItem = ({ chosenData }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(setBuilder({ [chosenData?.catId]: null }));
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        border: '1px solid #dcdedd',
        borderRadius: 10,
        margin: '0 20px',
      }}
    >
      <Paragraph style={{ margin: 0 }}>{chosenData?.name}</Paragraph>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          minWidth: 150,
          textAlign: 'right',
        }}
      >
        <Typography
          style={{
            borderRight: '1px solid #dcdedd',
            padding: '15px 13px 15px 0',
          }}
        >
          {chosenData?.price}
        </Typography>
        <Button type="link" size="large" danger onClick={handleRemove}>
          <CloseOutlined />
        </Button>
      </div>
    </div>
  );
};

export default ChosenItem;
