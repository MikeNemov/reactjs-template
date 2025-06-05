import { Button, Title } from '@telegram-apps/telegram-ui';
import { useLaunchParams } from '@telegram-apps/sdk-react';
import { Title } from '@telegram-apps/telegram-ui';

export function HomePage() {
  const { user } = useLaunchParams();
const name = (user as { first_name?: string })?.first_name ?? 'незнакомец';
const handleLogin = () => {
  alert('Нажата кнопка'); // временно
};



 return (
  <div style={{ padding: 16 }}>
    <Title level="1">Добро пожаловать, {name}!</Title>
    <p>Для начала нажмите кнопку ниже</p>
    <Button onClick={handleLogin} size="l" mode="primary">
      Войти через Telegram
    </Button>
  </div>
);
}
