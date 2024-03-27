import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


import 'bootstrap/dist/css/bootstrap.min.css';
import './sliderBlack.scss';

import background from '../sliderHome/img/background.png';
import background2 from '../sliderHome/img/bg2.png';
import background3 from '../sliderHome/img/bg3.png';
import background4 from '../sliderHome/img/bg4.png';
import background5 from '../sliderHome/img/bg5.png';
import nextIcon from '../../ui/icons/sliderBlack/nextIcon.svg';
import prevIcon from '../../ui/icons/sliderBlack/prevIcon.svg';

const icon = {
    nextIcon: <span className="glyphicon glyphicon-glass"><img src={nextIcon} alt="nextIcon" /></span>,
    prevIcon: <span className="glyphicon glyphicon-glass"><img src={prevIcon} alt="prevIcon" /></span>
}



const SliderBlack = ({bg}) => {
  const items = bg.map(({img}, i) => {
      return (
        <Carousel.Item key={i}>
        <div className="slider__img">
            <img
            style={{height: '120%', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', objectFit: 'cover'}}
            className="d-block w-100"
            src={img}
            alt="First slide"
            />
        </div>
      </Carousel.Item>
      )
  })
  return (
    <Carousel nextIcon={icon.nextIcon} prevIcon={icon.prevIcon} className='carousel-black'  fade>
      {items}
     
    </Carousel>
  );
};

export default SliderBlack;