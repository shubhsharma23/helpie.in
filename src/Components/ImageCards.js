import React from 'react'
import { Carousel } from 'react-bootstrap'
import './ImageCards.css'

const ImageCards = () => {
  return (
    <div id='box'>
      <div id="carContainer">
        <Carousel>
          <Carousel.Item>
            <img
              id="img1"
              className="d-block w-100"
              src={require('../Assets/images/11.jpg')}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>helpie a hand</h3>
              <p>a hand which always ready to help you</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="img1"
              className="d-block w-100"
              src={require('../Assets/images/2.jpg')}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p>we can take care of your loved once</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="img1"
              className="d-block w-100"
              src={require('../Assets/images/3.jpg')}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p>we know how to take care of things as well</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="img1"
              className="d-block w-100"
              src={require('../Assets/images/4.jpg')}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p>we now how to help your childrens to grow up with education</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
    </div>
  )
}

export default ImageCards;



