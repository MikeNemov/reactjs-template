import { useLaunchParams } from '@telegram-apps/sdk-react';
import { Title } from '@telegram-apps/telegram-ui';

export function HomePage() {
  const { user } = useLaunchParams();
const name = (user as { first_name?: string })?.first_name ?? 'незнакомец';


 return (
  <div style={{ padding: 16 }}>
    <Title level={1}>Добро пожаловать!</Title>
    <p>Для начала нажмите кнопку ниже</p>
    <Button onClick={handleLogin} size="l" mode="primary">
      Войти через Telegram
    </Button>
  </div>
);
}
