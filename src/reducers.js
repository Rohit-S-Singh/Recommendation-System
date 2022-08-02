/*
 *
 * reducers.js
 * reducers configuration
 */


// here we will combine all reducers

/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as notifications } from 'react-notification-system-redux';

// import reducers
// import applicationReducer from './containers/Application/reducer';
import {HomeReducer,searchReducer} from '../src/components/HomePage/reducer'
import {UserReducer} from '../src/components/User/reducer'
import authReducer from '../src/components/Authentication/reducers'



const createReducer = history =>
  combineReducers({
   router: connectRouter(history),
  HomeReducer:HomeReducer,
  searchReducer:searchReducer,
  UserReducer:UserReducer,
  authReducer:authReducer,
  });

export default createReducer;
