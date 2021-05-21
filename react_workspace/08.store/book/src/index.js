import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import BookStore from './store/BookStore';
import {Provider} from 'mobx-react';
ReactDOM.render(
  <Provider BookStore={BookStore}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
