import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import AppSecond from './components/AppSecond';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppSecond />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
