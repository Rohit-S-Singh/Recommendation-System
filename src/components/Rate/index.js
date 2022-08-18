import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import ReactStars from "react-rating-stars-component";
import "./style.css";

import { connect } from "react-redux";
import { UserReducer } from "../User/reducer";

const Rate = (props) => {
  console.log("moviessssss", props.movies);
  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((value) => value + 3);
  };

  const ratingChanged = (movie, newRating) => {
    var rating = {};
    rating[movie.name] = newRating;

    console.log(movie, props.user);

    props.addRating(rating);
    props.SetRating(rating,props.user);
  };

  var moviesLeftToBeRated = [];

  console.log("everv", props.rated);

  var movies_rated = Object.keys(props.rated);

  props.movies.slice(0, visible).map((mov) => {
    if (movies_rated.indexOf(mov.name) == -1) {
      moviesLeftToBeRated.push(mov);
    }
  });

  console.log(moviesLeftToBeRated);

  return (
    <div style={{ marginLeft: "100px" }}>
      {movies_rated.length > 0 && (
        <div style={{display:'flex',width:'400px',justifyContent:'space-evenly'}}>
          <div>
            <button>Add Given Ratings</button>
          </div>

          <div>
            <button>Clear Added Ratings</button>
          </div>
          <br/><br/>
        </div>
      )}
      <div className="container">
        {moviesLeftToBeRated.map((mov) => {
          return (
            <Row>
              <Col sm={4}>
                <img style={{ height: "300px" }} src={mov.Poster}></img>
              </Col>
              <Col sm={6}>
                <Row>
                  <Col sm={12}>
                    <h2>{mov.name}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}></Col>
                </Row>
                <br></br>
                <Row>
                  <Col sm={12}>{`Release Date - ${new Date(
                    mov.releasedDate
                  ).toDateString()}`}</Col>
                </Row>
                <Row>
                  <Col sm={6}></Col>
                </Row>
                <br></br>
                <p>{mov.description}</p>
              </Col>
              <Col sm={2}>
                <ReactStars
                  count={5}
                  onChange={(rating) => {
                    ratingChanged(mov, rating);
                  }}
                  size={35}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </Col>
            </Row>
          );
        })}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            onClick={showMore}
            style={{ color: "white" }}
            class="custom-btn btn-13"
          >
            Load More ...
          </button>
        </div>
        {moviesLeftToBeRated.length == 0 && (
          <div>
            No More Movies Left to be Rated. Search New Movies to Rate....
          </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

function mapStateToProps(state) {
  return {
    homepage: state.HomeReducer,
    search: state.searchReducer,
    authenticated: state.authReducer.authenticated,
    movies: state.MovieReducer.movies,
    rated: state.UserReducer.givenRatings,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Rate);
