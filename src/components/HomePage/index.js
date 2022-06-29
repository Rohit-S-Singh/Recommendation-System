import React from 'react';

import { connect } from 'react-redux';

import Box from '../Navbar/navbar1';
import Navbar from '../Search/navbar';

import{ movies } from '../../data'

import MovieCard from '../MovieCard/MovieCard';


import {  showfav , showmov , addMovies} from '../../actions/action';
import { searchReducer } from './reducer';


class HomePage extends React.Component {





  componentDidMount() {

    // this.props.homepage.store.subscribe(() => this.setState({}))

    // this.props.homepage.store.subscribe(() => this.setState({}))
    this.props.add(movies);

  console.log("mov", movies);





  
  }

  movieclicked(){
    
  //  console.log("kjnjknkjnnj "  ,this.props);
    this.props.show();
    // store.dispatch(showmov());

  // showmov();


  }

  favouriteclicked(){

    this.props.store.dispatch(showfav());

  // showfav()
  
  }

   handleButtonClick() {
    this.render();
  }



  funct(){
    this.movieclicked();
     this.handleButtonClick();

  }

  render(){

    var movies = this.props.homepage.movies;

    // console.log("movvvvvvvvvviiiesss" , movies);

    var curr_tab_movies =  this.props.homepage.showfavourite ? movies : movies;

    var activetab = this.props.homepage.showfavourite ? 2 : 1;

    var i = 0;

    console.log("cac" , this.props);

    return (
      <div className="App">
        {/* Hello World */}
        <Box/>
        {/* <Navbar1></Navbar1> */}
         <Navbar   search = {this.props.search.showSearchResults}   results={this.props.search.results}/>
         <div className = "tabs">
          <button  className ="show-movies" onClick = {()=>{this.funct()}}>Movies</button>
          <button className ="show-favourites" onClick = {()=>{this.favouriteclicked()}}>Favourites</button>
        </div>
        <div className="list">
         {curr_tab_movies.length === 0 ? <span>No movies to show..</span> :  curr_tab_movies.map((movie)=>{
           return <MovieCard movie = {movie} store = {this.props.store}  key={1 + ++i}/>
         })}
        </div>
      </div>
    );
  }
}

// export default App;
// const mapStateToProps = function(state){

//   return{

//   }


// }

// function mapStateToProps(state) {
//   // console.log("state ->>",state);
//   return { homepage:state.HomeReducer };
// }

const mapDispatchToProps = (dispatch) => {
  return {
    show: () => {
      dispatch(showmov())
    },add: (movie) => {
      dispatch(addMovies(movie))
    }
  }
}


function mapStateToProps(state) {
  console.log("state ->>",state);
  return { homepage:state.HomeReducer, search:state.searchReducer };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
