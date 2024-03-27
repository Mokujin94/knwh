import React, { useState } from 'react';
import { CSSTransition, Transition } from 'react-transition-group';

import arrow from '../../ui/icons/question/arrow.svg';

import './questions.scss';

const Questions = ({title, descr}) => {

    const [isActive, setIsActive] = useState(false);

    const reveal = () => {
        setIsActive(isActive => isActive = !isActive)
    }

    return (
        <div className='question' style={{}}>
            <div className="question__top" onClick={reveal}>
                <h2 className="question__title">{title}</h2>
                <img style={{transform: isActive ? 'rotate(-180deg)' : 'rotate(0)'}} src={arrow} alt="arrow" className="question__icon" />
            </div>
            <Transition
                in={isActive}
                timeout={2000}
                mountOnEnter
                unmountOnExit
            >
                {state => <p className={`question__descr ${state}`} >
                    {descr} 
                </p>}

            </Transition>

        </div>
    );
};

export default Questions;