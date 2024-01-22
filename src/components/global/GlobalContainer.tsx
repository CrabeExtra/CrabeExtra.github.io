import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import MainPage from '../../pages/mainpage/MainPage';
import About from '../../pages/about/About';
import Projects from '../../pages/projects/Projects';
import Contact from '../../pages/contact/Contact';

interface Props { }

const GlobalContainer: React.FC<Props> = () => {

    return (
        <main id='global-container'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
        </main>
    );
}

export default GlobalContainer;
