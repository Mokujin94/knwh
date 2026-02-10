import { useState } from 'react';

import "./modalFormNew.scss";
import { sendForm } from '../../http/sendAPI';
import { balchugTarif, blackTarif } from "../../data/tariffs";
import { bulchugRoomsArr, blackRoomsArr } from "../../data/rooms";

const ModalFormNew = ({  formActive, setForm, mailTo, setActiveMail, defaultRate, setDefaultRate, setActiveRate, activeRate }) => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [number, setNumber] = useState('');
    const [numberError, setNumberError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [rate, setRate] = useState('');
    const [policy, setPolicy] = useState(true);
    const [isOpenRateList, openRateList] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isValid, checkValidation] = useState(true);
    const [isOpenedForm, setOpenedForm] = useState(true); //  ЗАМЕНИТЬ НА formActive!!!!!!!!!!!!!!!!!
    let rateListArr = [];

    balchugTarif.forEach((elem) => elem.categories.forEach((category) => rateListArr = [...rateListArr, category.orderBtnText]));
    blackTarif.forEach((elem) => elem.categories.forEach((category) => rateListArr = [...rateListArr, category.orderBtnText]));
    bulchugRoomsArr.forEach((elem) => rateListArr = [...rateListArr, `Переговорная Balchug: ${elem.name}`]);
    blackRoomsArr.forEach((elem) => rateListArr = [...rateListArr, `Переговорная Black: ${elem.name}`]);


    const onSubmit = (e) => {
        e.preventDefault();
        if (name == '' || number == '' || email == '' || (rate == '' && !defaultRate)) {
            alert('Заполните все поля!');
        } else if(!policy) {
            alert('Подтвердите согласие с обработкой персональных данных и с политикой конфиденциальности');
        } else {
            setLoading(true);
            sendForm(name, number, email, rate, mailTo, activeRate)
                .then((response) => {
                    // console.log(response);
                    alert('Заявка успешно отправлена')
                    setForm(false)
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                })
                .finally(() => setLoading(false));
        }
    };

    const handleChange = (e) => {
        const input = e.target;
        const wrapper = input.closest('.modal-form__input-wrap');
        const errorBlock = wrapper.querySelector('.modal-form__input-error');

        if(input.value == '') {
            errorBlock.textContent = "Заполните данное поле";
            wrapper.classList.add('error');
            
        }


        // // регулярное выражение на проверку email
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // // устанавливаем новое значение
        // setEmail(e.target.value);
        // // проверяем соответствие введенных данных регулярному выражению
        // if (!emailRegex.test(email)) {
        //     // если не соответствует, устанавливаем ошибку
        //     setError("Invalid email address");
        // }
        // // иначе сбрасываем ошибку
        // else setError(""); 
    };

    const chooseRate = (e) => {
        const listItem = e.target;
        setRate(listItem.textContent);
        openRateList(false);
    }

    const setRates = rateListArr.map((rate, i) => {
        return(
            <li className="modal-form__list-item" key={i} onClick={chooseRate}>{rate}</li>
        );
    });

    return(
        <div className={isOpenedForm ? "modal-form-bg modal-form-bg_opened" : "modal-form-bg"}>
            <form className="modal-form" onSubmit={onSubmit}>
                <button class="modal-form__close-button" type="button" onClick={() => setOpenedForm(false)}>
                    <span></span>
                    <span></span>
                </button>
                <div className="modal-form__wrapper">
                    <fieldset className="modal-form__fieldset">
                        <div className="modal-form__input-wrap">
                            <input
                                type='text'
                                name='from_name'
                                placeholder='ФИО'
                                value={name}
                                onChange={handleChange}
                            />                            
                            <div className="modal-form__input-error"></div>
                        </div>
                        <div className="modal-form__input-wrap">
                            <input
                                type='tel'
                                name='to_name'
                                placeholder='Номер телефона'
                                mask="+{1}(000)000-00-00"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                            <div className="modal-form__input-error"></div>
                        </div>
                        <div className="modal-form__input-wrap">
                            <input
                                type='email'
                                name='reply_to'
                                placeholder='Почта'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="modal-form__input-error"></div>
                        </div>
                        <div className={isOpenRateList ? "modal-form__input-wrap list list_opened" : "modal-form__input-wrap list"}>
                            <input
                                type='text'
                                name='message'
                                placeholder='Интересующий тариф'
                                value={defaultRate ? activeRate : rate}
                                onChange={(e) => setRate(e.target.value)}
                                readOnly
                            />
                            <div className="modal-form__list-button" onClick={(e) => openRateList(!isOpenRateList)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="24" viewBox="0 0 10 24" fill="none">
                                    <path d="M4.62072 15.3333C4.81815 15.5556 5.18185 15.5556 5.37928 15.3333L9.88447 10.2607C10.1527 9.95872 9.92399 9.5 9.50519 9.5H0.494811C0.0760076 9.5 -0.152701 9.95872 0.115527 10.2607L4.62072 15.3333Z" fill="#222222" fill-opacity="0.6"></path>
                                </svg>
                            </div>
                            <div className="modal-form__list-modal">
                                <ul className="modal-form__list">{setRates}</ul>
                            </div>
                        </div>
                        <div className='modal-form__checkbox-wrap'>
                            <input 
                                className="modal-form__checkbox"  
                                type="checkbox" 
                                name="policy-checkbox" 
                                id="policy-checkbox-modal" 
                                onChange={(e) => setPolicy(item => !item)}
                                checked={policy}
                            />
                            <label className='modal-form__label' for='policy-checkbox-modal'>
                                Оставляя заявку, я даю согласие на обработку персональных данных и согласен с <a href='/polytics'>политикой конфиденциальности</a>
                            </label>
                        </div>
                    </fieldset>
                    <button  className={isLoading ? "modal-form__button loading" : "modal-form__button"} type='submit' disabled={!isValid}>Отправить</button>
                    <div className="modal-form__result">
                        <p className="modal-form__result-title">Спасибо!</p>
                        <p className="modal-form__result-text">Мы скоро свяжемся с вами.</p>
                    </div>
                </div>
            </form>
        </div>
    );
    
};

export default ModalFormNew;