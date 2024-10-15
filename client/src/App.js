import { React, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation
} from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Black from "./pages/black/Black";

import './ui/styles/app.scss';
import Balchug from './pages/balchug/Balchug';
import Rooms from './pages/rooms/Rooms';
import Gallery from './pages/gallery/Gallery';
import GalleryBalchug from './pages/galleryBalchug/GalleryBalchug';
import Services from './pages/services/Services';
import Team from './pages/team/Team';
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import { useEffect } from 'react';
import Contact from './pages/contact/Contact';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import useScript from './components/useScript/UseScript';
import Polityc from './pages/polytic/Polityc';
import ModalForm from './components/modalForm/ModalForm';

//тестовый коммит

function App() {
    const location = useLocation()
    const transitions = useTransition(location, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: {
            duration: 600,
        },
    })
    const [burgerActive, setBurgerActive] = useState(false);

    const burgerOpen = () => {
        setBurgerActive(item => !item);
    }

    useEffect(() => {
        document.title = 'KW';
    }, [])

    // useEffect(() => {
    // const script3 = document.createElement('script');
    // script3.src = 'script.js'

    // }, [])

    const [formActive, setFormActive] = useState(false)
    const [activeMail, setActiveMail] = useState('');
    const [activeRate, setActiveRate] = useState('');
    const [defaultRate, setDefaultRate] = useState(false);





    return transitions((props, item) => (
        <div className="App" style={{ position: 'relative' }}>

            <animated.div style={props}>

                <div style={{ position: 'absolute', width: '100%' }}>
                    <Header burger={burgerActive} onClick={() => burgerOpen()} />
                    <BurgerMenu onClick={() => burgerOpen()} />
                    <ModalForm formActive={formActive} setForm={setFormActive} mailTo={activeMail} setActiveMail={setActiveMail} defaultRate={defaultRate} setDefaultRate={setDefaultRate} setActiveRate={setActiveRate} activeRate={activeRate} />
                    <ScrollToTop />
                    <Routes location={item}>
                        <Route exact path="/" element={<Home setForm={setFormActive} setActiveMail={setActiveMail} setDefaultRate={setDefaultRate} setActiveRate={setActiveRate} />} />
                        <Route path="/black" element={<Black setForm={setFormActive} setActiveMail={setActiveMail} setDefaultRate={setDefaultRate} setActiveRate={setActiveRate} />} />
                        <Route path="/balchug" element={<Balchug setForm={setFormActive} setActiveMail={setActiveMail} setDefaultRate={setDefaultRate} setActiveRate={setActiveRate} />} />
                        <Route path="/rooms" element={<Rooms />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/gallery-balchug" element={<GalleryBalchug />} />
                        <Route path="/services" element={<Services />} />
                        {/* <Route path="/team" element={<Team setForm={setFormActive}/>} /> */}
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/polytics" element={<Polityc />} />
                    </Routes>
                </div>
            </animated.div>
        </div>
    ))
}

export default App;
