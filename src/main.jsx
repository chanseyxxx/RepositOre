import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Verifique o caminho e o nome do arquivo do seu componente principal
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
