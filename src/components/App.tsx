import { HashRouter, Routes, Route } from 'react-router-dom';

function DummyPage({ text }: { text: string }) {
  return <div style={{ padding: 20, color: 'green' }}>{text}</div>;
}

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DummyPage text="LoginPage placeholder" />} />
        <Route path="/home" element={<DummyPage text="HomePage placeholder" />} />
        <Route path="*" element={<DummyPage text="404: Страница не найдена" />} />
      </Routes>
    </HashRouter>
  );
}
