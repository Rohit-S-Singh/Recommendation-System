import React from 'react';

import Navbar from '../Search/navbar';
import MovieCard from '../MovieCard/MovieCard';


import {  showfav , showmov } from '../../actions/action';


class HomePage extends React.Component {

  // componentDidMount() {

  //   this.props.store.subscribe(() => this.setState({}))
  
  // }

  // movieclicked(){
    

  //   this.props.store.dispatch(showmov());


  // }

  // favouriteclicked(){

  //   this.props.store.dispatch(showfav());
  
  // }

  render(){

    // var movies = this.props.store.getState().movies;

    // var curr_tab_movies =  this.props.store.getState().movies.showfavourite ? movies.favourites : movies.movies;

    // var activetab = this.props.store.getState().movies.showfavourite ? 2 : 1;

    var i = 0;

    return (
      <div className="App">
        Hello World
        {/* <Navbar1></Navbar1> */}
         {/* <Navbar   search = {this.props.store.getState().search}   store={this.props.store}/>
         <div className = "tabs">
          <button  className ="show-movies" onClick = {()=>{this.movieclicked()}}>Movies</button>
          <button className ="show-favourites" onClick = {()=>{this.favouriteclicked()}}>Favourites</button>
        </div> */}
        {/* <div className="list">
         {curr_tab_movies.length === 0 ? <span>No movies to show..</span> :  curr_tab_movies.map((movie)=>{
           return <MovieCard movie = {movie} store = {this.props.store}  key={1 + ++i}/>
         })}
        </div> */}
      </div>
    );
  }
}

// export default App;


export default HomePage;