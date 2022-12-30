import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { loginReducer, formReducer } from './redux/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter as Router} from 'react-router-dom'

//reducer
const rootReducer = combineReducers({
  login:loginReducer,
  form:formReducer,
})
//store
const store = createStore(rootReducer,composeWithDevTools())
//root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />   
    </Router>
  </Provider>   
);