import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


/**
 * This file can be ignored, please work in ./components/App.jsx
 */

// Include mock API.
import './mock';
import './mock/index'

// Include styles.
import './styles/index.css';

// Include application component.
import App from './components/App';
import Store from "./Redux/Store";
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
