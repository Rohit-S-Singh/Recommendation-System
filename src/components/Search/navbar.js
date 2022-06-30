import React from 'react';
import {connect} from 'react-redux'; 
import imag from '../../images/search.png'; 

import {addToMoviesList , handleMovieSearch} from '../../actions/action';

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            searchText : '',
            showSearchResults:true
        };
    }

    handleAddToMovies = (movie) => {

        this.props.addToMoviesList(movie);
    
    };

    handleSearchClick = () => {
        const { searchText } = this.state;
        console.log(searchText);
        this.props.handleMovieSearch(searchText);
    };

    handleChangeInSearchBox = (e) => {

        this.setState({
            searchText : e.target.value
        });
    };

    render(){


        console.log("props",this.props);

        const { showSearchResults } = this.props.search;

        const result = this.props.search.result;

        return <div className = "navbar">

            <div className="navv">

           

            <input onChange={this.handleChangeInSearchBox} type="text" placeholder="Search here..."/>
            <button className = "navbarbtn" onClick={this.handleSearchClick}><img className="btnn" src={imag} alt="no-image"/></button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addToMoviesList: (movie) => {
      dispatch(addToMoviesList(movie))
    },
     handleMovieSearch:(text)=>{
      dispatch(handleMovieSearch(text))
     }
  }
}


function mapStateToProps(state) {
  return {search:state.searchReducer };
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
