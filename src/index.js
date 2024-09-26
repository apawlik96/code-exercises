import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Calculator } from './usememo/Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

reportWebVitals();