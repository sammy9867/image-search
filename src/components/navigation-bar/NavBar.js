import React, { useState, useCallback } from 'react';
import { IconContext } from 'react-icons';
import { FaBars, FaHeart, FaHome } from 'react-icons/fa';
import { AiOutlineClose  } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './NavBar.css';

export const NavBar = () => {

    const [sideBar, setSideBar] = useState(false);  

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar">
                <Link to="#" className='menu-bar'>
                    <FaBars onClick={() => {setSideBar(!sideBar)}}/>
                </Link> 
            </div>

            <nav className={sideBar ? "sidebar active" : "sidebar"}>
                <ul className="sidebar-items" onClick={() => {setSideBar(!sideBar)}}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bar">
                            <AiOutlineClose />
                        </Link>
                    </li>
                    
                    <li className="navbar-li">
                        <Link to="/">
                            <FaHome />
                            <span>Home</span>
                        </Link>
                    </li>
                     <li className="navbar-li">
                        <Link to="/favourite">
                            <FaHeart />
                            <span>Favourite</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            </IconContext.Provider>
        </>

    );
}