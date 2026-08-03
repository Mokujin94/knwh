import { useState } from 'react';

import "./modalFormNew.scss";
import { sendForm } from '../../http/sendAPI';
import { balchugTarif, blackTarif } from "../../data/tariffs";
import { bulchugRoomsArr, blackRoomsArr } from "../../data/rooms";

const ModalFormNew = ({  formActive, setForm, mailTo, setActiveMail, defaultRate, setDefaultRate, setActiveRate, activeRate }) => {

    const [ policy, setPolicy ] = useState(true);
    const [ isOpenRateList, openRateList ] = useState(false);
    const [ isLoading, setLoading ] = useState(false);
    const [ resStatus, setResStatus ] = useState(null); // error || success
    const [ isOpenedForm, setOpenedForm ] = useState(formActive); //  ЗАМЕНИТЬ НА formActive!!!!!!!!!!!!!!!!!
    const [ values, setValues ] = useState({});
    const [ errors, setErrors ] = useState({});
    const [ isValid, setIsValid ] = useState(true);

    let rateListArr = [];

    balchugTarif.forEach((elem) => elem.categories.forEach((category) => rateListArr = [...rateListArr, category.orderBtnText]));
    blackTarif.forEach((elem) => elem.categories.forEach((category) => rateListArr = [...rateListArr, category.orderBtnText]));
    bulchugRoomsArr.forEach((elem) => rateListArr = [...rateListArr, `Переговорная Balchug: ${elem.name}`]);
    blackRoomsArr.forEach((elem) => rateListArr = [...rateListArr, `Переговорная Black: ${elem.name}`]);



    const onSubmit = (e) => {
        e.preventDefault();
        const isFormValid = e.target.checkValidity();
        setIsValid(isFormValid);

        if(isFormValid == false) {
            e.target.querySelectorAll('input:not([type="checkbox"])').forEach(({ name, value, required }) => {
                if(required && value == '') {
                    errors[name] = 'Вы пропустили это поле.'
                }
            });  
            
            return;
        } 





        setLoading(true);
        
        setTimeout(() => {
            setResStatus('success');
        }, 1500)

        


        
        // if (name == '' || number == '' || email == '' || (rate == '' && !defaultRate)) {
        //     alert('Заполните все поля!');
        // } else if(!policy) {
        //     alert('Подтвердите согласие с обработкой персональных данных и с политикой конфиденциальности');
        // } else {
        //     setLoading(true);
        //     sendForm(name, number, email, rate, mailTo, activeRate)
        //         .then((response) => {
        //             // console.log(response);
        //             alert('Заявка успешно отправлена')
        //             setForm(false)
        //         })
        //         .catch((err) => {
        //             console.log('FAILED...', err);
        //         })
        //         .finally(() => setLoading(false));
        // }
    };

    const checkValue = (name, value) => {
        let valueRes = value;

        if(name == 'name') {
            valueRes = value.replace(/[^A-Za-zА-Яа-я\s]/g, '')
        };

        if(name == 'phone') {
            valueRes = value.replace(/[^0-9()+-\s]/g, '')
        };

        if(name == 'email') {
            valueRes = value.replace(/[^A-Za-z0-9_.@-]/g, '')
        };

        return valueRes;
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setValues({...values, [name]: checkValue(name, value) });
        setErrors({...errors, [name]: e.target.validationMessage});
        setIsValid(e.target.closest('form').checkValidity());
    };


    const handleChangeCheckbox = (e) => {
        setPolicy(!policy);
        setIsValid(e.target.closest('form').checkValidity());
    };

    const chooseRate = (e) => {
        const listItem = e.target;
        values.message = listItem.textContent;
        openRateList(false);
    }

    const setRates = rateListArr.map((rate, i) => {
        return(
            <li className="modal-form__list-item" key={i} onClick={chooseRate}>{rate}</li>
        );
    });

    const closeModalByOverlay = (e) => {
        if(e.target == e.currentTarget) setOpenedForm(false);
        setForm(false);
        setActiveMail('');
        setDefaultRate(false);
        setActiveRate('');
    }

    return(
        <div className={`modal-form-bg ${isOpenedForm && "modal-form-bg_opened"}`} onClick={closeModalByOverlay}>
            <form className="modal-form" onSubmit={onSubmit} noValidate>
                <button className="modal-form__close-button" type="button" onClick={() => setOpenedForm(false)}>
                    <span></span>
                    <span></span>
                </button>
                <div className="modal-form__wrapper">
                    <h2 className="modal-form__title">Оставить заявку</h2>
                    <fieldset className="modal-form__fieldset">
                        <div className={`modal-form__input-wrap ${errors.name ? 'error'  : ''}`}>
                            <input
                                type='text'
                                name='name'
                                placeholder='ФИО*'
                                value={values.name || ''}
                                onChange={handleChange}
                                required
                            />                            
                            <div className="modal-form__input-error">{errors.name || ''}</div>
                        </div>
                        <div className={`modal-form__input-wrap ${errors.phone ? 'error' : ''}`}>
                            <input
                                type='tel'
                                name='phone'
                                placeholder='Номер телефона*'
                                value={values.phone || ''}
                                onChange={handleChange}
                                required
                            />
                            <div className="modal-form__input-error">{errors.phone || ''}</div>
                        </div>
                        <div className={`modal-form__input-wrap ${errors.email ? 'error' : ''}`}>
                            <input
                                type='email'
                                name='email'
                                placeholder='Почта*'
                                value={values.email || ''}
                                onChange={handleChange}
                                required
                            />
                            <div className="modal-form__input-error">{errors.email || ''}</div>
                        </div>
                        <div className={`modal-form__input-wrap list ${isOpenRateList ? "list_opened" : ''}`}>
                            <input
                                type='text'
                                name='message'
                                placeholder='Интересующий тариф'
                                value={defaultRate ? activeRate : values.message}
                                onChange={handleChange}
                                readOnly
                            />
                            <div className="modal-form__list-button" onClick={(e) => openRateList(!isOpenRateList)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="24" viewBox="0 0 10 24" fill="none">
                                    <path d="M4.62072 15.3333C4.81815 15.5556 5.18185 15.5556 5.37928 15.3333L9.88447 10.2607C10.1527 9.95872 9.92399 9.5 9.50519 9.5H0.494811C0.0760076 9.5 -0.152701 9.95872 0.115527 10.2607L4.62072 15.3333Z" fill="#222222" fillOpacity="0.6"></path>
                                </svg>
                            </div>
                            <div className="modal-form__list-modal">
                                <ul className="modal-form__list">{setRates}</ul>
                            </div>
                        </div>
                        <div className={`modal-form__input-wrap ${!policy && 'error'}`}>
                            <input 
                                className="modal-form__checkbox"  
                                type="checkbox" 
                                name="policyCheckbox" 
                                id="policy-checkbox-modal" 
                                onChange={handleChangeCheckbox}
                                checked={policy}
                                required
                            />
                            <label className='modal-form__label' htmlFor='policy-checkbox-modal'>
                                Оставляя заявку, я даю согласие на обработку персональных данных и согласен с <a href='/polytics'>политикой конфиденциальности</a>
                            </label>
                            <div className="modal-form__input-error">Подтвердите согласие с обработкой персональных данных и с политикой конфиденциальности</div>
                        </div>
                    </fieldset>
                    <button  className={isLoading ? "modal-form__button loading" : "modal-form__button"} type='submit' disabled={!isValid}>Отправить</button>
                    <div className={resStatus !== null ? "modal-form__result active" : "modal-form__result"}>
                        <p className="modal-form__result-title">{resStatus == "success" ? "Спасибо!" : "Ошибка!"}</p>
                        <p className="modal-form__result-text">{resStatus == "success" ? "Мы скоро свяжемся с вами." : "Попробуйте позднее."}</p>
                    </div>
                </div>
            </form>
        </div>
    );
    
};

export default ModalFormNew;

// Всем привет!
// Форма понесла следующие обновления:
// 1. Анимация появления формы.
// 2. Закрытие формы не только по фону, но и по крестику в углу.
// 3. Разрешение ввода только определенных символов. "Имя" - только кириллица и латиница, пробел. "Телефон" - цифры, плюс, скобки, пробел. "Почта" - только латиница, цифры, дефис, нижнее подчеркивание, собака, точка.
// 4. Стилизация. Форма стала шире, появился ховер-эффект на полях формы - меняется цвет границы при наведении на поле и его фокусировке. Кноку сделала в стиле других кнопок на сайте. Поля формы сделала чуть аккуратнее, убрала гигантизм. 
// 6. Выпадающий список в поле "Интересующий тариф". Мне показалось, что так гораздо удобнее для пользователя, чем ввод тарифа или переговорки вручную. Поле будет заполняться автоматически по клику на определенный тариф/пк, как и раньше. Если вам не нравится, уберу. 
// 7. Добавила спиннер. Пявляется в момент, когда форма корректно заполнена и происходит процесс отправки заявки на вашу почту. Иногда серврер работает чуть дольше, чем ожидается, и этот спиннер наглядно демонстрирует, что сайт не завис, а думает.
// 8. Сделала окно об успешной отправке формы в самой форме. Есть еще вариант, что форма не отправлена: "Ошибка! Попробуйте позднее". Его использую в будущем для Я.Капчи.
// 9. Валидация. Справа (на моб. версии сверху) появляются сообщения об ошибках. Поля подчеркиваются красным. При корректном вводе данных в поле, сообщение с ошибкой тут же исчезает. Кнопка "Отправить" деактивируется до тех пор, пока не будут корректно заполнены все нужные поля и отмечен чекбокс о Политике конфиденциальности.

// Еще на форму, как мне кажется, очень просится заголовок по типу "Оставить заявку". Также я бы сделала поле email необязательным для ввода. Обычно достаточно имени и телефона. Что скажете?

// Если все ок, то остается добавление капчи, но тут нужна будет ваша помощь.
// Я планирую поставить Яндекс.Капчу. У нее до 10 тысяч запросов в месяц бесплатно. Как правило, этого более чем достаточно. Капчу нужно будет привязать к любому из аккаунтов knwh на Яндексе. Инструкцию пришлю. Или вы можете дать доступ мне и я сделаю это самостоятельно. 
// Капчу я хочу сделать невидимой, то есть она появится только тогда, когда заподозрит юзера в подозрительной активности. Для такого случая Яндекс пишет следующее: "Вы обязаны уведомлять пользователей о том, что их данные обрабатывает SmartCaptcha. Если вы скрываете блок с уведомлением, сообщите пользователям иным способом о том, что SmartCaptcha обрабатывает их данные." (https://yandex.cloud/ru/docs/smartcaptcha/concepts/react). Тут на ваше усмотрение, как стоит разместить. 
// Видимая капча выглядит как чекбокс "Я не робот". Мне такая не нравится, но тут как вы скажете :)

// Форму уже могу разместить, но пока без капчи. Сейчас она именно так и размещена, и, как я понимаю, атаки ботов вас не тревожат.
// В общем жду вашего вердикта и ответов на мои вопросы:
// 1. Заголовок "Оставить заявку" делаем?
// 2. Сделаем email необязательным для ввода?
// 3. Оставляем выпадающий список у тарифов/пк?
// 4. Как поступим с капчей?
// 5. Как в целом нововведения? Обновляем форму на сайте?

// Для капчи:
// 1. Авторизовываемся под аккаунтом в https://console.yandex.cloud
// 2. Ниже на страницы в блоке Все сервисы переходим в Yandex SmartCaptcha
// 3. Создаем тестовую капчу для того, чтобы вызвать окно создания платежного аккаунта. Капча все равно не создастся в последствии.  
// 4. В окне регистрации платежного аккаунта заполняем все поля, но карту не привязываем.
// 5. Далее в левом меню жмем:
//   Все сервисы - Аккаунт - Billing. Потребление и оплата (сверху в выпадающем меню)
// 6. Кликаем на ранее созданный платежный аккаунт и сверху страницы жмем на желтую кнопку «Перейти на платную версию» или как-то так. Жмем, но карту снова не привязываем.
// 7. Возвращаемся на страницу создания капчи и создаем капчу еще раз.