import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import ReactStars from "react-rating-stars-component";
import "./style.css";

const Rate = (props) => {
  var temp = [
    { id: "1", name: "", image: "", description: "", rating: "" },
    { id: "2", name: "", image: "", description: "", rating: "" },
    { id: "3", name: "", image: "", description: "", rating: "" },
    { id: "4", name: "", image: "", description: "", rating: "" },
    { id: "5", name: "", image: "", description: "", rating: "" },
    { id: "6", name: "", image: "", description: "", rating: "" },
    { id: "7", name: "", image: "", description: "", rating: "" },
    { id: "8", name: "", image: "", description: "", rating: "" },
    { id: "9", name: "", image: "", description: "", rating: "" },
    { id: "10", name: "", image: "", description: "", rating: "" },
    { id: "11", name: "", image: "", description: "", rating: "" },
    { id: "12", name: "", image: "", description: "", rating: "" },
    { id: "13", name: "", image: "", description: "", rating: "" },
    { id: "14", name: "", image: "", description: "", rating: "" },
    { id: "15", name: "", image: "", description: "", rating: "" },
    { id: "16", name: "", image: "", description: "", rating: "" },
  ];
  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((value) => value + 3);
  };
  const ratingChanged = (movie, newRating) => {
    var rating = {};
    rating[movie.id] = newRating;

    props.addRating(rating);
  };
  return (
    <div>
      <div className="container">
        {temp.slice(0, visible).map((mov) => {
          return (
            <Row>
              <Col sm={4}>
                <img
                  style={{ height: "300px" }}
                  src="https://i.ibb.co/dJjd3K2/bajirao-mastani-movie-poster-1.jpg"
                ></img>
              </Col>
              <Col sm={6}>
                <Row>
                  <Col sm={12}>
                    <h2>Bajirao</h2>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}></Col>
                </Row>
                <br></br>
                <Row>
                  <Col sm={12}>Release Date - September 20, 2012</Col>
                </Row>
                <Row>
                  <Col sm={6}></Col>
                </Row>
                <br></br>
                <p>
                  Bajirao Mastani is a 2015 Indian Hindi-language epic
                  historical romance film directed by Sanjay Leela Bhansali, who
                  also composed its soundtrack. Jointly produced by Bhansali and
                  Eros International's Kishore Lulla, the film stars Ranveer
                  Singh, Deepika Padukone and Priyanka Chopra. The supporting
                  cast includes Tanvi Azmi, Vaibhav Tatwawaadi and Milind Soman.
                  Based on the Marathi novel Rau by Nagnath S.{" "}
                </p>
              </Col>
              <Col sm={2}>
                {" "}
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
      </div>
    </div>
  );
};

export default Rate;
