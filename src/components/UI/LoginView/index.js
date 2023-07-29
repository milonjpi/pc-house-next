import { Button, Card } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const LoginView = () => {
  const router = useRouter();
  const from = router.query?.callbackUrl;
  return (
    <div style={{ padding: '100px 0' }}>
      <Card
        title="PC HOUSE LOGIN"
        style={{ width: 300, margin: 'auto', textAlign: 'center' }}
      >
        <Button
          type="primary"
          icon={<GithubOutlined />}
          onClick={() => signIn('github', { callbackUrl: from ? from : '/' })}
        >
          Login with GitHub
        </Button>
      </Card>
    </div>
  );
};

export default LoginView;
