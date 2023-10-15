import './newsCarousel.css'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import {  Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const NewsCarousel =() =>{
 

  
  return (
    <>
    <div className="newsContainer">
      <p>Moviebase has received toching comment</p>
      <Swiper
     
        cssMode={true}
        navigation={true}
        
        loop={true}
        
        
        autoplay={{
          delay: 3000,
          
          disableOnInteraction: false,
        }}
        // pagination={true}
        pagination={{
          clickable: true,
          
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >

       
        <SwiperSlide>Nice app to be notified about your favorite series next episode and to know <br></br>how much longer you need to wait until next season.
        <div className='writer'>
          Afrooz R.
        </div>
        </SwiperSlide>
        <SwiperSlide>Nice app to be notified about your favorite series next episode and to know <br></br>how much longer you need to wait until next season. 
        
        <div className='writer'>
          Jade K.
        </div>
        </SwiperSlide>
        <SwiperSlide>Easy to navigate with a nice and simple interface.
        
        <div className='writer'>
          Taru A.
        </div>
        </SwiperSlide>
        <SwiperSlide>This is by far the best movie informer ever! Everything is up to date and<br></br> its plain and simple, nothing complicated.
        <div className='writer'>
          Phillip P.
        </div>
        </SwiperSlide>
        <SwiperSlide>Great for any movie lover. Seamless Trakt integration and easy to use user interface
        <div className='writer'>
        Danial D.
        </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
    </>
  )
};




export default NewsCarousel;