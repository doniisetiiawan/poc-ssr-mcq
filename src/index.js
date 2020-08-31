import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import createStore from './store';
import './index.scss';

setTimeout(() => {
  const initialState = window.__INITIAL_STATE__ || {};
  const store = createStore(initialState);

  ReactDOM.hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
}, 2000);
