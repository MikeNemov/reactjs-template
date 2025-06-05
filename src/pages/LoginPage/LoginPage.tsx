import { useLaunchParams } from '@telegram-apps/sdk-react';
import { Button, Title } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';

// Типизация Telegram user
type TelegramUser = {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
};

export function LoginPage() {
  const launchParams = useLaunchParams();
  const navigate = useNavigate();

  // Явно указываем тип
  const user = launchParams?.user as TelegramUser | undefined;

  const handleLogin = () => {
    if (user?.id) {
      navigate('/home');
    } else {
      alert('Ошибка: данные Telegram не получены');
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <Title level="1">Добро пожаловать!</Title>
      <p>Для начала нажмите кнопку ниже</p>
      <Button onClick={handleLogin} size="l" mode="primary">
        Войти через Telegram
      </Button>
    </div>
  );
}

