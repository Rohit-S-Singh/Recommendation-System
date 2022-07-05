import * as React from "react";
import { connect } from "react-redux";
import { Fragment } from "react";
import Card from "../MovieCard/Card";
import { useEffect } from "react";
// import { MDBBtn } from "mdbreact";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import CsvCreator from "react-csv-creator";

const Recommend = ({ user, givenRatings }) => {
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

  useEffect( ()=>{console.log("change here")},[givenRatings]);

  var temp_Products = [
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },

  ];

  console.log("Ratings given are" , givenRatings.givenRatings);
  const headers = [
    {
      id: "first",
      display: "Payal",
    },
    {
      id: "second",
      display: "Rohit",
    },
  ];

  const rows = [
    // {
    //   first: "1",
    //   second: "2",
    // },
  ];

  console.log()

  var a = Object.keys(givenRatings.givenRatings);

  for(let i = 0; i < a.length ; i++){
    var obj={};
    obj["first"] = givenRatings.givenRatings[a[i]];
    obj["second"] = givenRatings.givenRatings[a[i]];

    rows.push(obj);
  }

  console.log("rowwsss",rows);

//   var ratings = {
//     payal:{

//     },
//     rohit:{

//     }
// }

  return (
    <div>
      <CsvCreator filename="my_cool_csv" headers={headers} rows={rows}>
        <p>Download CSV</p>
      </CsvCreator>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {user.length == 0 && (
          <button style={{ color: "white" }} class="custom-btn btn-13">
            Get Recommendations
          </button>
        )}
      </div>
      <br></br>
      <br></br>
      {user.length != 0 && (
        <Carousel
          // ref={carouselRef}
          responsive={responsive}
          arrows={true}
          // customRightArrow={<CustomRight />}
          // customLeftArrow={<CustomLeft />}
          // renderButtonGroupOutside={false}
          // showDots={window.screen.width < 2000 ? true : false}
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
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    // addRating: (movieRating) => {
    //   dispatch(addRating(movieRating))
    // }
  };
};

function mapStateToProps(state) {
  return { user: state.UserReducer.Recommendations, givenRatings: state.UserReducer };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
