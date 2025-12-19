import { useState, useEffect } from 'react'

import './cookiesWindow.scss';

const CookiesWindow = () => {

    const [cookiesWindowActive, setCookiesWindowActive] = useState(false);

    useEffect(() => { 
        const isCookiesAccept = window.localStorage.getItem('acceptCookies') || null;
        if(!isCookiesAccept)  setCookiesWindowActive(true);
    })
    
    function handleClickBtn() {
        window.localStorage.setItem('acceptCookies', true);
        setCookiesWindowActive(false);
    }

    return (
        <div className={cookiesWindowActive ? 'modal-cookies modal-cookies_opened' : 'modal-cookies'}>
            <div className="modal-cookies__container">
                <p className='modal-cookies__text'>
                    Наш сайт использует файлы cookie. Продолжая использовать этот сайт, вы соглашаетесь на их использование.<br></br>
                    Для получения дополнительной информации вы можете ознакомиться с <a href='/polytics'>Политикой конфиденциальности</a>. 
                    Вы можете в любое время отключить файлы cookie в настройках своего браузера.
                </p>
                <button className="modal-cookies__btn" type='button' onClick={handleClickBtn}>Принять и закрыть</button>
            </div>
        </div>
    )
};

export default CookiesWindow;