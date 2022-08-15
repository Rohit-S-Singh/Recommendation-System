/**
 *
 * actions.js
 * actions configuration
*/

import { bindActionCreators } from 'redux';

import * as User from './components/User/actions'

// import * as application from './containers/Application/actions';
import * as authentication from '../src/components/Authentication/actions';
import * as movies from "../src/components/Movies/actions";
import * as Recommend from "../src/components/Recommend/actions";


export default function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      ...User,
      ...movies,
      ...Recommend
    },
    dispatch
  );
}
