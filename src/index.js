//CALL MODULES
import React from 'react';
import ReactDOM from 'react-dom/client';

//IMPORTING STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

//IMPORT COMPONENTS
import App from './App';

//REACT APP -- NUEVA VERSION 18
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)