import * as React from 'react';
import Card from '../MovieCard/Card'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Recommend = () => {
    
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
  
  var temp_Products = [
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
    { image: "", description: "", price: "", sale: "", ratings: "", brand: "" },
  ];

    return <div>
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
              description="abcgyufyuucctctycycyctycytcytcd."
              price="22"
              sale=""
              ratings="5"
              brand="Yellow"
            />
          );
        })}
      </Carousel>

    </div>
}

export default Recommend;
