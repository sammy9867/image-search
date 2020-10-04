import React from 'react';  
import './Error.css';
import { useThemeValue } from '../../context';

export const Error = () => {

    const { isLightTheme } = useThemeValue();

    isLightTheme 
    ? document.getElementsByTagName('body')[0].setAttribute('style', 'background-color:#F0F2F5')
    : document.getElementsByTagName('body')[0].setAttribute('style', 'background-color:black');

    return (
        <div className="error" data-testid="error">
            <h2 className={isLightTheme ? "light-mode" : "dark-mode"}>Oops! Page not found.</h2>
            <h1 className={isLightTheme ? "light-mode" : "dark-mode"}>404</h1>
            <h3 className={isLightTheme ? "light-mode" : "dark-mode"}>Sorry, this page isn't available.</h3>
        </div>
    );

}