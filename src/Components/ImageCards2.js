import React from 'react'
import {Carousel} from 'react-bootstrap'
import './ImageCards.css'

const ImageCards2=()=>{
    return(
        <div id="carContainer"> 
          <Carousel>
  <Carousel.Item>
    <img
      id="img1"
      className="d-block w-100"
      src={require('../Assets/images/1.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
  <Carousel.Item>
    <img
      id="img1"
      className="d-block w-100"
      src={require('../Assets/images/6.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
  <Carousel.Item>
    <img
      id="img1"
      className="d-block w-100"
      src={require('../Assets/images/8.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
 
  
 
</Carousel>
        </div>
    )
}

export default ImageCards2;
    
    
    
 