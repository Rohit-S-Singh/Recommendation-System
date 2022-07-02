import React from 'react';

import { connect } from 'react-redux';
import Box from '../Navbar/navbar1';

import Navbar from '../Search/navbar';
import Tabs from '../Utility/Tabs'

import { movies } from '../../data'

import MovieCard from '../MovieCard/MovieCard';

import {  showfav , showmov , addMovies} from '../../actions/action';
import { searchReducer } from './reducer';

class HomePage extends React.Component {

  componentDidMount(){
    this.props.add(movies);
  }

  movieclicked(){
    this.props.show();
  }

  favouriteclicked(){
    this.props.showfav();
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
    
    var favourites = this.props.homepage.favourites;

    var curr_tab_movies =  this.props.homepage.showfavourite ? favourites:movies  ;

    var activetab = this.props.homepage.showfavourite ? 1 : 0;

    var i = 0;

    return (
      <div className="App">
        {/* Hello World */}
        <Box/>
         <Navbar   search = {this.props.search.showSearchResults}   results={this.props.search.results}/>
        <Tabs func = {this.funct} func2 = {this.favouriteclicked} activetab = {activetab} ></Tabs>

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

const mapDispatchToProps = (dispatch) => {
  return {
    show: () => {
      dispatch(showmov())
    },
     showfav:()=>{
      dispatch(showfav())
     },
    add: (movie) => {
      dispatch(addMovies(movie))
    }
  }
}


function mapStateToProps(state) {
  return { homepage:state.HomeReducer, search:state.searchReducer };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
