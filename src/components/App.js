import Navbar from './navbar';
import MovieCard from './MovieCard';
import Navbar1 from './navbar1';
import Application from '../components/Application';
import { createBrowserHistory } from 'history';

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
// import ScrollToTop from "./scrollToTop";



import {  showfav , showmov } from '../actions/action';


import RootReducer from '../reducer/reducers';

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



var store = createStore(RootReducer , applyMiddleware( thunk ) );


const app = () => (
  <Provider store={store}>
    <ConnectedRouter history={history} >
      {/* <ScrollToTop> */}
        <Application />
      {/* </ScrollToTop> */}
    </ConnectedRouter>
  </Provider>
);

export default app;


// class App extends React.Component {

//   componentDidMount() {

//     this.props.store.subscribe(() => this.setState({}))
  
//   }

//   movieclicked(){
    

//     this.props.store.dispatch(showmov());


//   }

//   favouriteclicked(){

//     this.props.store.dispatch(showfav());
  
//   }

//   render(){

//     var movies = this.props.store.getState().movies;

//     var curr_tab_movies =  this.props.store.getState().movies.showfavourite ? movies.favourites : movies.movies;

//     // var activetab = this.props.store.getState().movies.showfavourite ? 2 : 1;

//     var i = 0;

//     return (
//       <div className="App">
//         <Navbar1></Navbar1>
//          <Navbar   search = {this.props.store.getState().search}   store={this.props.store}/>
//          <div className = "tabs">
//           <button  className ="show-movies" onClick = {()=>{this.movieclicked()}}>Movies</button>
//           <button className ="show-favourites" onClick = {()=>{this.favouriteclicked()}}>Favourites</button>
//         </div>
//         <div className="list">
//          {curr_tab_movies.length === 0 ? <span>No movies to show..</span> :  curr_tab_movies.map((movie)=>{
//            return <MovieCard movie = {movie} store = {this.props.store}  key={1 + ++i}/>
//          })}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
