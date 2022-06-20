import React from 'react';
import imag from './search.png'; 

import {addToMoviesList , handleMovieSearch} from '../actions/action';

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            searchText : '',
            showSearchResults:true
        };
    }

    handleAddToMovies = (movie) => {

        this.props.store.dispatch(addToMoviesList(movie));
    
    };

    handleSearchClick = () => {
        const { searchText } = this.state;
        this.props.store.dispatch(handleMovieSearch(searchText));
    };

    handleChangeInSearchBox = (e) => {

        this.setState({
            searchText : e.target.value
        });
    };

    render(){

        const { showSearchResults } = this.props.search;

        const {result} = this.props.search;

        return <div className = "navbar">

            <div className="navv">

           

            <input onChange={this.handleChangeInSearchBox} type="text" placeholder="Search here..."/>
            <button className = "navbarbtn" onClick={this.handleSearchClick}><img className="btnn" src={imag} alt="no-ige"/></button>
            </div>

        { showSearchResults &&

           (result.Title ? 
            <div className="search-result">

                    <img src={result.Poster} alt="Not Available"/>

                    <div className = "searched">


                    <div><h5>{result.Title}</h5></div>

                    <div>{result.Plot}</div>

                    </div>

                    <button className="add-fav" onClick = {() => this.handleAddToMovies(result)}>add to Movies</button> 
            
            </div> : <div className = "not-found">Movie Not Found.</div>)
        }
    
       </div>
    }
}
export default Navbar;