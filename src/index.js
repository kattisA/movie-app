import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Favicon from "./components/Favicon/favicon";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Favicon />
    <App />
  </React.StrictMode>
);
