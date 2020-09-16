import React from 'react';
import './Header.css'
import { SearchBar } from './search/SearchBar';
import { useThemeValue } from '../../context';

export const Header = () => {
    const { isLightTheme, setIsLightTheme } = useThemeValue();

    return (
        <header className={isLightTheme ? "header-light" : "header-dark" } data-testid="header">
            <span> <SearchBar /></span>
            <label>
                <input 
                    type="checkbox" 
                    onClick={() => setIsLightTheme(!isLightTheme)} />
                <span className="check"></span>
            </label>
        </header>
    );
}