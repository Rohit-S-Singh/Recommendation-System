import Navbar from './components/Search/navbar';
import MovieCard from './components/MovieCard/MovieCard';
import Navbar1 from './components/Navbar/navbar1';

import {HomeReducer,searchReducer} from '../src/components/HomePage/reducer'


import Application from './components/Application';
import { createBrowserHistory } from 'history';
import {  combineReducers} from 'redux';

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { connectRouter } from 'connected-react-router'



import {  showfav , showmov } from './actions/action';


// import RootReducer from '../reducer/reducers';

// import {data} from './data';

// import { addMovies } from './actions/action';

import  { createStore , applyMiddleware } from 'redux';


const thunk = ({dispatch , getState})  => (next) => (action) =>{

  if(typeof(action) === 'function'){

    action(dispatch);
    return;
  }

  next(action);
}


const history = createBrowserHistory({
  basename: '/',
  hashType: 'noslash'
});


let reducer = (state=0, action) => {
  switch (action.type) {
    case 'INCREASE': 
            return state+1
    case 'DECREASE': 
            return state-1
    default: return state
  }
}

const RootReducer = combineReducers({
  router: connectRouter(history),
  HomeReducer:HomeReducer,
  searchReducer:searchReducer
}
);


var store = createStore(RootReducer , applyMiddleware( thunk ) );


const app = () => (
  <Provider store={store}>
    <ConnectedRouter history={history} >
        <Application />
    </ConnectedRouter>
  </Provider>
);

export default app;


