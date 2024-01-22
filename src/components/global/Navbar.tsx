import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logo from "../../assets/img/logos/Jude-logo.png";

interface Props { }

const Navbar: React.FC<Props> = () => {
    let location = useLocation();
    const [activePage, setActivePage] = useState<string>("home");
    
    useEffect(() => {
        let page = location.pathname.split('/')[1];
        setActivePage(page ? page : "home");
    }, [location]);

    return (
        <header className="header">
            <NavLink to="/" className="w-10 h-10 rounded-3xl bg-white items-center justify-center flex font-bold shadow-md radius">
                <img src={logo} className="rounded-3xl" alt="My logo. Resembles my initials 'JB'." />
            </NavLink>

            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({isActive}) => isActive ? 'text-yellow-500' : activePage === 'home' ? 'text-black' : 'text-white'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? 'text-yellow-500' : activePage === 'home' ? 'text-black' : 'text-white'}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? 'text-yellow-500' : activePage === 'home' ? 'text-black' : 'text-white'}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar;