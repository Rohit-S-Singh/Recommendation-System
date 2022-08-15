import * as React from "react";
import { connect } from "react-redux";
import Card from "../MovieCard/Card";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import { useState, CSSProperties } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import MoonLoader from "react-spinners/MoonLoader";

import { sendRatings } from "./actions";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Recommend = ({ user, givenRatings, getRecommendations , name}) => {
  const responsive = {
    desktop1: {
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
      //  slidesToSlide: 3, // optional, default to 1.
    },
    desktop2: {
      breakpoint: { max: 1400, min: 997 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 997, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1,
    },
  };

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  var temp_Products = [
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
  ];

  const rows = [];

  var a = Object.keys(givenRatings.givenRatings);

  for (let i = 0; i < a.length; i++) {
    var obj = {};
    obj["first"] = givenRatings.givenRatings[a[i]];
    obj["second"] = givenRatings.givenRatings[a[i]];

    rows.push(obj);
  }

  return (
    <div>
      {/* <CsvCreator filename="my_cool_csv" headers={headers} rows={rows}>
        <p>Download CSV</p>
      </CsvCreator> */}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {user.length == 0 && (
          <button
            onClick={() => {
              getRecommendations(user.givenRatings,name);
            }}
            style={{ color: "white" }}
            class="custom-btn btn-13"
          >
            Get Recommendations
          </button>
        )}
      </div>
      <br></br>
      <br></br>
      {user.length != 0 &&
        (loading ? (
          <PuffLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={70}
          />
        ) : (
          <Carousel
            // ref={carouselRef}
            responsive={responsive}
            arrows={true}
          >
            {temp_Products.map((product, index) => {
              return (
                <Card
                  image="aa"
                  description="abc."
                  price="22"
                  sale=""
                  ratings="5"
                  brand="Yellow"
                />
              );
            })}
          </Carousel>
        ))}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    getRecommendations: (movieRating,user_name) => {
      dispatch(sendRatings(movieRating,user_name));
    },
  };
};

function mapStateToProps(state) {
  return {
    user: state.UserReducer.Recommendations,
    givenRatings: state.UserReducer,
    name: state.UserReducer.name,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
