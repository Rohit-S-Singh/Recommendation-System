import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactStars from "react-rating-stars-component";

const Rate = (props)=> {
    
  var temp = [
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
  const ratingChanged = (newRating) => {
  console.log(newRating);
};
    return (
        <div>

        <Container>
            {
                temp.map((mov)=>{
                    
                    return(
                    <Row>
                        <Col sm={4}><img style={{height:"300px"}}src="https://i.ibb.co/dJjd3K2/bajirao-mastani-movie-poster-1.jpg"></img></Col>
                        <Col sm={6}><p>Bajirao Mastani is a 2015 Indian Hindi-language epic historical romance film directed by Sanjay Leela Bhansali, who also composed its soundtrack. Jointly produced by Bhansali and Eros International's Kishore Lulla, the film stars Ranveer Singh, Deepika Padukone and Priyanka Chopra. The supporting cast includes Tanvi Azmi, Vaibhav Tatwawaadi and Milind Soman. Based on the Marathi novel Rau by Nagnath S. </p></Col>
                        <Col sm={2}>   <ReactStars
    count={5}
    onChange={ratingChanged}
    size={35}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
                                      </Col>
                    </Row>
                    )
              })
            }        
        </Container>

        </div>
    );
}

export default Rate;