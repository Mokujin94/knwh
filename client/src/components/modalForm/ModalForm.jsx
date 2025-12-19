import React, { useEffect } from 'react';
import { useState } from 'react';

import './modalForm.scss'
import { sendForm } from '../../http/sendAPI';

const ModalForm = ({ formActive, setForm, mailTo, setActiveMail, defaultRate, setDefaultRate, setActiveRate, activeRate }) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [rate, setRate] = useState('');
    const [policy, setPolicy] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        if (name == '' || number == '' || email == '' || (rate == '' && !defaultRate)) {
            alert('Заполните все поля!');
        } else if(!policy) {
            alert('Подтвердите согласие с обработкой персональных данных и с политикой конфиденциальности');
        } else {
            sendForm(name, number, email, rate, mailTo, activeRate)
                .then((response) => {
                    // console.log(response);
                    alert('Заявка успешно отправлена')
                    setForm(false)
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
        }
    };

    return (
        <>
            <div style={{ display: formActive ? 'flex' : 'none' }} className='modal-form'>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='ФИО'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type='text'
                        name='to_name'
                        placeholder='Номер телефона'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <input
                        type='text'
                        name='reply_to'
                        placeholder='Почта'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='text'
                        name='message'
                        placeholder='Интересующий тариф'
                        value={defaultRate ? activeRate : rate}
                        disabled={defaultRate}
                        onChange={(e) => setRate(e.target.value)}
                    />
                    <div className='modal-form__checkbox-wrap'>
                        <input 
                            className="modal-form__checkbox"  
                            type="checkbox" 
                            name="policy-checkbox" 
                            id="policy-checkbox" 
                            onChange={(e) => setPolicy(item => !item)}
                            checked={policy}
                        />
                        <label className='modal-form__label' for='policy-checkbox'>
                            Оставляя заявку, я даю согласие на обработку персональных данных и согласен с <a href='/polytics'>политикой конфиденциальности</a>
                        </label>
                    </div>
                    <button type='submit'>Отправить</button>
                </form>
            </div>
            <div onClick={() => {
                setForm(false);
                setActiveMail('');
                setDefaultRate(false)
                setActiveRate('')
            }} style={{ display: formActive ? 'block' : 'none' }} className='modal-form-bg'>

            </div>
        </>


    );
};

export default ModalForm;