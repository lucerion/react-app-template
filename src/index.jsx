import './styles/app.css';

import { createRoot } from 'react-dom/client';

const App = () => (
  <div>Hello, World!</div>
),
container = document.getElementById('app'),
root = createRoot(container);

root.render(<App />);
