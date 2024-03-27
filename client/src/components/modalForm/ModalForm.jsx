import React, { useEffect } from 'react';
import { useState } from 'react';

import './modalForm.scss'
import { sendForm } from '../../http/sendAPI';

const ModalForm = ({ formActive, setForm }) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [rate, setRate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name == '' || number == '' || email == '' || rate == '') {
            alert('Заполните все поля!');
        } else {
            sendForm(name, number, email, rate)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
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
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                    />
                    <button type='submit'>Отправить</button>
                </form>
            </div>
            <div onClick={() => setForm(false)} style={{ display: formActive ? 'block' : 'none' }} className='modal-form-bg'>

            </div>
        </>


    );
};

export default ModalForm;