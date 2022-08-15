import React from "react";

import { connect } from "react-redux";

import { addfavourite, removefavourite } from "../../actions/action";

class MovieCard extends React.Component {
  handlefavourite = (movie) => {
    this.props.addfavourite(movie);
  };

  handleUnfavourite = (movie) => {
    this.props.removefavourite(movie);
  };

  isfavourite = (movie) => {
    var a = this.props.favourites;

    var i = a.indexOf(movie);

    if (i === -1) {
      return 0;
    }

    return 1;
  };

  render() {
    var { authenticated } = this.props;
    return (
      <div className="list-item">
        <img
          src={this.props.movie.Poster}
          className="poster"
          alt="Not Available"
        ></img>
        {/* 
        name: {
    type: String,
  },
  description:{
    type: String
  },
  runtime: {
    type: String
  },
  releasedDate:{
    type: Date
  },
  Poster:{
    type:String
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  } */}

        <div className="information">
          <h3>{this.props.movie.name}</h3>
          <br></br>
          <h4>{this.props.movie.description}</h4>

          <div className="extra-info">
            {/* <span>IMDB Rating - {this.props.movie.Rating}</span> */}

            <span>
              Release Date -{" "}
              {new Date(this.props.movie.releasedDate).toDateString()}
            </span>
            {this.isfavourite(this.props.movie) ? (
              <button
                className="Unfavourite"
                onClick={() => {
                  if (authenticated == true)
                    this.handleUnfavourite(this.props.movie);
                }}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite"
                onClick={() => {
                  if (authenticated == true)
                    this.handlefavourite(this.props.movie);
                }}
              >
                Add Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addfavourite: (movie) => {
      dispatch(addfavourite(movie));
    },
    removefavourite: (movie) => {
      dispatch(removefavourite(movie));
    },
  };
};

function mapStateToProps(state) {
  return {
    favourites: state.HomeReducer.favourites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
