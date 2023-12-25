import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ReduxProvider } from './redux/Provider/ReduxProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReduxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);
