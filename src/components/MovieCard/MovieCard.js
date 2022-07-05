import React from 'react';

import { connect } from 'react-redux';

import { addfavourite , removefavourite} from '../../actions/action';

class MovieCard extends React.Component{
    
    handlefavourite = (movie) => {
        this.props.addfavourite(movie);
    }

    handleUnfavourite = (movie) => {
         this.props.removefavourite(movie);
    }


    isfavourite = (movie) => {  
        
        var a = this.props.favourites;
    
        var i =  a.indexOf(movie);
    
        if(i===-1){
            return 0;
        }

        return 1;    
    }


    render(){
        return <div className="list-item">
            
            <img src={this.props.movie.Poster} className="poster" alt="Not Available"></img>

             <div className="information">
            <h3>{this.props.movie.Title}</h3>

            <h4>{this.props.movie.Plot}</h4>

            <div className="extra-info">
                <span>IMDB Rating - {this.props.movie.imdbRating}</span>
                <span>Release Date - {this.props.movie.Released}</span>
            {
                this.isfavourite(this.props.movie) ? <button className="Unfavourite" onClick={()=>this.handleUnfavourite(this.props.movie)}>Unfavourite</button >:
                <button className="favourite" onClick={()=>this.handlefavourite(this.props.movie)}>Add Favourite</button >
            }
            </div>
        </div>

        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addfavourite : (movie) => {
      dispatch(addfavourite (movie))
    },removefavourite: (movie) => {
      dispatch(removefavourite(movie))
    }
  }
}


function mapStateToProps(state) {
  return { 
    favourites:state.HomeReducer.favourites 
};
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieCard);
