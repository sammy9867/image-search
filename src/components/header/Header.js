import React, { useState } from 'react';
import { SearchBar } from './search/SearchBar';
import { FaBars, FaHeart, FaHome, FaMoon } from 'react-icons/fa';
import { AiOutlineClose  } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useThemeValue } from '../../context';
import './Header.css';

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
            <span className="searchBar"> <SearchBar /> </span>
            <nav className={getNavClassName()}>
                <ul className="topbar-items">
                    <li className="navbar-li" data-testid="home-link" onClick={() => {setSideBar(!sideBar)}}>
                        <Link to="/image-search">
                             <span className="nav-visibility"> <FaHome color={isLightTheme ? "black" : "white"}/> </span>
                             <span className={isLightTheme ? "nav-text nav-light" : "nav-text nav-dark"} ><b>Home</b></span>
                        </Link>
                    </li>

                     <li className="navbar-li" data-testid="fav-link" onClick={() => {setSideBar(!sideBar)}}>
                        <Link to="/image-search/favourite">
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
                                checked={!isLightTheme}
                                onClick={() => setIsLightTheme(!isLightTheme)} />
                            <span className="check"></span>
                        </label>
                    </li>                    
                </ul>
            </nav>

            <div className="navbar" data-testid="navbar">
                <Link to="#" className='menu-bar' data-testid="menu-link">
                    {
                     sideBar 
                     ? <span data-testid="close"><AiOutlineClose size={28} color={isLightTheme ? "black" : "white"} onClick={() => {setSideBar(!sideBar)}}/> </span>
                     : <span data-testid="bar"><FaBars size={28} color={isLightTheme ? "black" : "white"} onClick={() => {setSideBar(!sideBar)}}/>  </span>
                    }
                </Link> 
            </div>
        </header>
    );
}