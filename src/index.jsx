import './styles/app.css';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const App = () => (
  <div>Hello, World!</div>
);

root.render(<App />);
