import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import  { store } from './redux/store.js';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor = persistStore(store);
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <PersistGate  persistor={persistor}>
      <App />
   </PersistGate>
   </Provider>
  </React.StrictMode>
);

const cities = ["Gorakhpur", "Lucknow", "Agra" , "Lucknow", "Agra"];
const result = cities.filter((element, index) => cities.indexOf(element) == index);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
