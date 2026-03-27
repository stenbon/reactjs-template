import { Section, Cell, List, Button, Title, Text } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Page } from '@/components/Page.tsx';

export const IndexPage: FC = () => {
  const handleMainAction = () => {
    // Здесь позже повесим нужное действие:
    // открыть другой экран, отправить initData боту, открыть ссылку и т.п.
    window.open('https://t.me/your_bot', '_blank'); // пока пример
  };

  return (
    <Page back={false}>
      <List>
        <Section>
          <Title level="1" style={{ marginBottom: 8 }}>
            Твой первый Telegram Mini App
          </Title>
          <Text style={{ marginBottom: 16 }}>
            Короткое описание: чем полезен мини‑приложение и что получит пользователь,
            на 1–2 строки. Можно написать про воронку / чек‑лист / подборку ИИ‑инструментов.
          </Text>

          <Cell
            multiline
            style={{ textAlign: 'center' }}
          >
            <Button size="l" stretched onClick={handleMainAction}>
              Получить результат
            </Button>
          </Cell>
        </Section>
      </List>
    </Page>
  );
};
