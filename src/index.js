import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import RootReducer from './reducer/reducers';

import {data} from './data';

import { addMovies } from './actions/action';

import  { createStore , applyMiddleware } from 'redux';


const thunk = ({dispatch , getState})  => (next) => (action) =>{

  if(typeof(action) === 'function'){

    action(dispatch);
    return;
  }

  next(action);
}

var store = createStore(RootReducer , applyMiddleware( thunk ) );

store.dispatch(addMovies(data));

ReactDOM.render(
    <App store={store}/>,
  document.getElementById('root')
);

export default store;
