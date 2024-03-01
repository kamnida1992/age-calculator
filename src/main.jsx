import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/age-calculator/">
      <App />
    </Router>
  </React.StrictMode>
);