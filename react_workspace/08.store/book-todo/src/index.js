import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import TodoStore from './store/TodoStore';
import BookStore from './store/BookStore';
import {Provider} from 'mobx-react';
ReactDOM.render(
  <Provider TodoStore={TodoStore} BookStore={BookStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
