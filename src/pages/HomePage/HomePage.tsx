import { useLaunchParams } from '@telegram-apps/sdk-react';
import { Button, Title } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const launchParams = useLaunchParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: 16 }}>
      <Title level={1}>Привет, {launchParams?.user?.first_name || 'друг'}!</Title>
      <p>Ты вошёл в приложение.</p>
      <Button onClick={handleLogout} size="l" mode="filled">
        Выйти
      </Button>
    </div>
  );
}
