import React, { useState, useRef } from 'react';
import './Header.css'
import { FaBars, FaHeart, FaHome, FaMoon } from 'react-icons/fa';
import { AiOutlineClose  } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SearchBar } from './search/SearchBar';
import { useThemeValue } from '../../context';

export const Header = () => {
    const { isLightTheme, setIsLightTheme } = useThemeValue();
    const [sideBar, setSideBar] = useState(false);  

    
    const getNavClassName = () => {
        let className = "sidebar";
        className += isLightTheme ? " sidebar-light" : " sidebar-dark";
        className += sideBar ? " sidebar-active" : "";
        return className;
    }

    return (
        <header 
            className={isLightTheme ? "header-light" : "header-dark" }
            data-testid={isLightTheme ? "header-light" : "header-dark" }
        >
            <span className="searchBar"> <SearchBar /></span>
            <nav className={getNavClassName()}>

                <ul className="topbar-items">
                    <li className="navbar-li">
                        <Link to="/">
                             <span className="nav-visibility"> <FaHome color={isLightTheme ? "black" : "white"}/> </span>
                            <span className={isLightTheme ? "nav-text nav-light" : "nav-text nav-dark"} ><b>Home</b></span>
                        </Link>
                    </li>
                     <li className="navbar-li">
                        <Link to="/favourite">
                            <span className="nav-visibility"> <FaHeart color={isLightTheme ? "black" : "white"}/> </span>
                            <span className={isLightTheme ? "nav-text nav-light" : "nav-text nav-dark"}><b>Favourite</b></span>
                        </Link>
                    </li>

                    <li className="navbar-li">
                            <span className="nav-icon nav-visibility"><FaMoon color={isLightTheme ? "black" : "white"}/> </span> 
                            <span className={isLightTheme ? "nav-text nav-visibility nav-light" : "nav-text nav-visibility nav-dark"}>
                                <b>Dark Mode</b>
                            </span>
                        <label>
                            <input 
                                aria-label="switch-theme"
                                type="checkbox" 
                                onClick={() => setIsLightTheme(!isLightTheme)} />
                            <span className="check"></span>
                        </label>
                    </li>

                    
                </ul>
            </nav>

            <div className="navbar">
                <Link to="#" className='menu-bar'>
                   {/* <div className="menu-wrap"  onClick={() => {setSideBar(!sideBar)}}>
                        <input type="checkbox" className="toggler" />
                        <div className="hamburger">
                            <div></div>
                        </div>
                    </div>   */}
                    { sideBar ? <AiOutlineClose size={28} color={isLightTheme ? "black" : "white"} onClick={() => {setSideBar(!sideBar)}}/> 
                            : <FaBars size={28} color={isLightTheme ? "black" : "white"} onClick={() => {setSideBar(!sideBar)}}/> 
                    }
                </Link> 
            </div>
        </header>
    );
}