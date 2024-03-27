import React, { useEffect } from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

import './modalForm.scss'

const ModalForm = ({formActive, setForm}) => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        if (toSend.from_name == '' || toSend.to_name == '' || toSend.message == '' || toSend.reply_to == '') {
          alert('Заполните все поля!');
        } else {
          send(
            'service_37ye2at',
            'template_x44pdcb',
            toSend,
            '4ezj5vXImrJr3R2uh'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              alert('Заявка успешно отправлена')
              setForm(false)
              setToSend({
                from_name: '',
                to_name: '',
                message: '',
                reply_to: '',
              })
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
        }
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return (
      <>
        <div style={{display: formActive ? 'flex' : 'none'}} className='modal-form'>
          <form onSubmit={onSubmit}>
              <input
                  type='text'
                  name='from_name'
                  placeholder='ФИО'
                  value={toSend.from_name}
                  onChange={handleChange}
              />
              <input
                  type='text'
                  name='to_name'
                  placeholder='Номер телефона'
                  value={toSend.to_name}
                  onChange={handleChange}
              />
              <input
                  type='text'
                  name='reply_to'
                  placeholder='Почта'
                  value={toSend.reply_to}
                  onChange={handleChange}
              />
              <input
                  type='text'
                  name='message'
                  placeholder='Интересующий тариф'
                  value={toSend.message}
                  onChange={handleChange}
              />
              <button type='submit'>Отправить</button>
          </form>
        </div>
        <div onClick={() => setForm(false)} style={{display: formActive ? 'block' : 'none'}} className='modal-form-bg'>

        </div>
      </>

        
    );
};

export default ModalForm;