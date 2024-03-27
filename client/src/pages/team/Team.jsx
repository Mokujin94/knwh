import React from 'react';
import { NavLink } from 'react-router-dom';
import Applications from '../../components/applications/Applications';
import TeamItem from '../../components/teamItem/TeamItem';


import './team.scss';

import Alex from './img/Алексей Алексеев.jpg';
import telegram from '../../ui/icons/footer/telegram.svg';
import vk from '../../ui/icons/footer/vk.svg';
import market from '../../ui/icons/footer/market.svg';
import store from '../../ui/icons/footer/store.svg';
import Footer from '../../components/footer/Footer';


const Team = ({setForm}) => {
    const team = [
        {img: Alex, title: 'Алексей алексеев', descr: 'Старший менеджер'},
        {img: Alex, title: 'Алексей алексеев', descr: 'Старший менеджер'},
        {img: Alex, title: 'Алексей алексеев', descr: 'Старший менеджер'},
        {img: Alex, title: 'Алексей алексеев', descr: 'Старший менеджер'},
        {img: Alex, title: 'Алексей алексеев', descr: 'Старший менеджер'},
        {img: Alex, title: 'Алексей алексеев', descr: 'Старший менеджер'},
        {img: Alex, title: 'Алексей алексеев', descr: 'Старший менеджер'},
        {img: Alex, title: 'Алексей алексеев', descr: 'Старший менеджер'},

    ]

    const teamItem = team.map(({img, title, descr}, i) => {
        return <TeamItem img={img} title={title} descr={descr} key={i}/>;
    })

    return (
        <>
            <section className='team'>
                <div className="container">
                    <h2 className="team__title">команда know where</h2>
                    <div className="team__wrapper">
                        {teamItem}
                    </div>
                    <Applications title="Хотите стать частью команды?" descr="Напишите нам, и мы рассмотрим ваше резюме!" button="Написать" setForm={setForm}/>
                </div>
            </section>
            <Footer style={'footer__white footer__primary'}/>
        </>
    );
};

export default Team;