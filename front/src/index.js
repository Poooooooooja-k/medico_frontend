import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './redux/Store';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  integrity="sha512-v7WvnpOvcjO0wGxv5qW4pDLdLW0Usihf4z4j7/Vv5OesgJjVgIrzDSBtAARqLdLpmh1uH4Q1uzc+F/BbF+OSQA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>

root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={appStore}>
  <App /> 
  </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
