import React from 'react';

import { addfavourite , removefavourite} from '../actions/action';

class MovieCard extends React.Component{
    
    handlefavourite = (movie) => {
        
        this.props.store.dispatch(addfavourite(movie));
    }

    handleUnfavourite = (movie) => {
        
        this.props.store.dispatch(removefavourite(movie));    
    }


    isfavourite = (movie) => {  
        
        var a = this.props.store.getState().movies.favourites;
    
        var i =  a.indexOf(movie);
    
        if(i===-1){
            return 0;
        }

        return 1;    
    }


    render(){

        // console.log(this.props.movie);

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

export default MovieCard;
