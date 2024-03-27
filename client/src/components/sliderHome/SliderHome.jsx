import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


import 'bootstrap/dist/css/bootstrap.min.css';
import './sliderHome.scss';

import background from './img/1.jpg';
import background2 from './img/2.jpg';
import background3 from './img/3.jpg';
import background4 from './img/4.jpg';
import background5 from './img/5.jpg';

const SliderHome = () => {
  return (
    <Carousel controls={false} className='carousel-home' fade>
      <Carousel.Item>
        <img
          style={{height: '120%', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', objectFit: 'cover'}}
          className="d-block w-100"
          src={background}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height: '120%', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', objectFit: 'cover'}}
          className="d-block w-100"
          src={background2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height: '120%', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', objectFit: 'cover'}}
          className="d-block w-100"
          src={background3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height: '120%', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', objectFit: 'cover'}}
          className="d-block w-100"
          src={background4}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height: '120%', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', objectFit: 'cover'}}
          className="d-block w-100"
          src={background5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default SliderHome;