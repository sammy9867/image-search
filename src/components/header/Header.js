import React, { useState } from 'react';
import { SearchBar } from './search/SearchBar';
import { FaBars, FaHeart, FaHome, FaMoon } from 'react-icons/fa';
import { AiOutlineClose  } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { useThemeValue } from '../../context'
import './Header.css';

export const Header = () => {

    const { isLightTheme, setIsLightTheme } = useThemeValue();
    const [sideBar, setSideBar] = useState(false);  

    const location = useLocation();
    const [isHome, setIsHome] = useState(location.pathname === "/" ? true : false);  
    const [isFav, setIsFav] = useState(location.pathname === "/favourite" ? true : false);  
        
    const getNavClassName = () => {
        var className = "sidebar";
        className += isLightTheme ? " sidebar-light" : " sidebar-dark";
        className += sideBar ? " sidebar-active" : "";
        return className;
    }

    const setHome = () => {
        setSideBar(!sideBar);
        setIsHome(true);
        setIsFav(false);
    }

    const setFav = () => {
        setSideBar(!sideBar);
        setIsHome(false);
        setIsFav(true);
    }


    const setNavIconColorForHome = () => {
        let color = "";
        color = isLightTheme ? "black" : "white";
        if(isHome && isLightTheme) color = "#34a1cd";    
        else if(isHome && !isLightTheme) color = "#ade6e6";
        return color;
    }


    const setNavIconColorForFav = () => {
        let color = "";
        color = isLightTheme ? "black" : "white";
        if(isFav && isLightTheme) color = "#34a1cd";    
        else if(isFav && !isLightTheme) color = "#ade6e6";
        return color;
    }


    const setNavTextColorForHome = () => {
        let className = "nav-text";
        if(isHome && isLightTheme) className += " nav-selected-light";
        else if(isHome && !isLightTheme) className += " nav-selected-dark";
        else if(isLightTheme) className += " nav-light" 
        else className += " nav-dark";
        return className
    }


    const setNavTextColorForFav = () => {
        let className = "nav-text";
        if(isFav && isLightTheme) className += " nav-selected-light";
        else if(isFav && !isLightTheme) className += " nav-selected-dark";
        else if(isLightTheme) className += " nav-light" 
        else className += " nav-dark";
        return className
    }


    return (
        <header 
            className={isLightTheme ? "header-light" : "header-dark" }
            data-testid={isLightTheme ? "header-light" : "header-dark" }
        >
            <span className="searchBar"> <SearchBar /> </span>
            <nav className={getNavClassName()}>
                <ul className="topbar-items">
                    <li className="navbar-li" data-testid="home-link" >
                        <Link to="/" onClick={() => { setHome()}}>
                             <span className="nav-visibility"> <FaHome color={setNavIconColorForHome()}/> </span>
                             <span className={setNavTextColorForHome()} ><b>Home</b></span>
                        </Link>
                    </li>

                     <li className="navbar-li" data-testid="fav-link">
                        <Link to="/favourite" onClick={() => {setFav()}}>
                            <span className="nav-visibility"> <FaHeart color={setNavIconColorForFav()}/> </span>
                            <span className={setNavTextColorForFav()}><b>Favourite</b></span>
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
                                onClick={() => setIsLightTheme(!isLightTheme)} 
                                onChange={e => {}}
                                checked={!isLightTheme}/>
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