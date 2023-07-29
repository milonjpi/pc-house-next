import { Button, Card } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { signIn } from 'next-auth/react';

const LoginView = () => {
  return (
    <div style={{ padding: '100px 0' }}>
      <Card
        title="PC HOUSE LOGIN"
        style={{ width: 300, margin: 'auto', textAlign: 'center' }}
      >
        <Button
          type="primary"
          icon={<GithubOutlined />}
          onClick={() =>
            signIn('github', { callbackUrl: 'http://localhost:3000' })
          }
        >
          Login with GitHub
        </Button>
      </Card>
    </div>
  );
};

export default LoginView;
