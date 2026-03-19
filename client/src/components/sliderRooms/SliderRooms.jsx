import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import './sliderRooms.scss';

import nextIcon from '../../ui/icons/sliderBlack/nextIcon.svg';
import prevIcon from '../../ui/icons/sliderBlack/prevIcon.svg';

const icon = {
  nextIcon: (
    <span className='glyphicon glyphicon-glass'>
      <img src={nextIcon} alt='nextIcon' />
    </span>
  ),
  prevIcon: (
    <span className='glyphicon glyphicon-glass'>
      <img src={prevIcon} alt='prevIcon' />
    </span>
  ),
};

const SliderRooms = ({ styles, color, border, arr, clame, roomsType, setForm, setActiveMail, setDefaultRate, setActiveRate }) => {

  const onForm = (name) => {
    setActiveMail("tickets@knwh.ru");
    setActiveRate(`${roomsType} - ${name}`);
    setDefaultRate(true);
    setForm(true);
    return;
  }

  const items = arr.map(({ img, name, list, price, href, available, btnText }, i) => {
    return (
      <Carousel.Item key={i}>
        <div className='container'>
          <div className='rooms'>
            <div
              className={styles ? `rooms__wrapper ${styles}` : `rooms__wrapper`}
            >
              <div className='rooms__left'>
                <img src={img} alt='img' className='rooms__img' />
              </div>
              <div className='rooms__right'>
                <div className='rooms__header'>
                  <h2 className={`rooms__title ${color}`}>{name}</h2>
                  {/* <p className={`rooms__descr ${color}`}>{adress}</p> */}
                </div>
                <div className='rooms__menu'>
                  <ul className='rooms__list'>
                    {list.map(({ icon, title }, i) => {
                      return (
                        <li className={`rooms__item ${border}`} key={i}>
                          <div className='rooms__icon-block'>
                            <img
                              src={icon}
                              alt='icon'
                              className='rooms__icon'
                            />
                          </div>
                          <p className={`rooms__menu-title ${color}`}>
                            {title}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={`rooms__price ${color}`}>{price}</div>
                <div onClick={() => onForm(name)} className={available == false ? `rooms__btn rooms__btn_disabled ${color}` : `rooms__btn ${color}`}>{btnText ? btnText : 'Оставить заявку'}</div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    );
  });

  return (
    <Carousel
      nextIcon={icon.nextIcon}
      prevIcon={icon.prevIcon}
      indicators={false}
      className={clame ? `carousel-rooms ${clame}` : 'carousel-rooms'}
      fade
    >
      {items}
    </Carousel>
  );
};

export default SliderRooms;
