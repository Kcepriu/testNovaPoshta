import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import 'modern-normalize';
import './index.css';
import './css/react-paginate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="testNovaPoshta">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
