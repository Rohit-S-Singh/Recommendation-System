import React from "react";
import './movieCarousel.css'



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import movie6 from '../../images/m2.jpg'
import movie8 from '../../images/m8.jpg'
import movie1 from '../../images/m3.jpg'
import movie7 from '../../images/m6.jpg'
import movie2 from '../../images/m5.jpg'
import movie3 from '../../images/moive2.jpg'
import movie4 from '../../images/movie4.jpeg'
import movie5 from '../../images/m1.jpg'

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
      prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1091,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },

    ]
  };


  return (
    <>
      <div className="container" >
        <div className="heading">
          <p>POPULAR MOVIE</p>
        </div>

        <Slider {...settings}>

        <div className="card">
            <img src={movie6} height={220} width={160} />
            <div className="card-body" >
              <p>Ye Jawaani hai Deewani</p>
            </div> 
          </div>

          <div className="card">
            <img src={movie8} height={220} width={160} />
            <div className="card-body" >
              <p>Half Girlfriend</p>
            </div> 
          </div>

          <div className="card">
            <img src={movie7} height={220} width={160} />
            <div className="card-body" >
              <p>Shaandaar</p>
            </div> 
          </div>

          <div className="card">
            <img src={movie1} height={220} width={160} />
            <div className="card-body">
              <p>Kick</p>
            </div>
          </div>

          <div className="card">
            <img src={movie2} height={220} width={160} />
            <div className="card-body">
              <p>Dhadak</p>
            </div>
          </div>

          <div className="card">
            <img src={movie3} height={220} width={160} />
            <div className="card-body"  >
              <p>Happy New Year</p>
            </div>
          </div>

          <div className="card">
            <img src={movie4} height={220} width={160} />
            <div className="card-body" >
              <p>The Fault in our Stars</p>
            </div>
           </div>

          <div className="card">
            <img src={movie5} height={220} width={160} />
            <div className="card-body" >
              <p>ABCD</p>
            </div> 
          </div>
          


        </Slider>

      </div>
    </>
  )
};




export default Carousel;