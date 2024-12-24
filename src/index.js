import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { Store } from './Redux/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={Store}>
      <App />
    </Provider>
      
    </HashRouter>
  </React.StrictMode>
);

