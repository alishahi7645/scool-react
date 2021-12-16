import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Render from './components/render/render';
import ThemecontextProvider from './context/theme/theme';
import axios from 'axios';
axios.interceptors.request.use(request=>{
  console.log(request);

  return request;
},error=>{
  console.log(error);
})
ReactDOM.render(
  <React.StrictMode>
    <ThemecontextProvider>
      <App/>
    </ThemecontextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
