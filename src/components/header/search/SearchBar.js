import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useThemeValue, useQueryValue, usePageNumberValue } from '../../../context';
import './SearchBar.css';

export const SearchBar = () => {

    const { isLightTheme } = useThemeValue();
    const  { setQuery }  = useQueryValue();
    const  { setPageNumber }  = usePageNumberValue();
    return (
        <div 
            className={isLightTheme ? "search-container" : "search-container-dark" }
            data-testid={isLightTheme ? "search-container" : "search-container-dark"}
        >  
            <span data-testid="search-icon"> <FaSearch /> </span>
            <input 
                type="text" 
                className="search-bar"
                aria-label="search bar"
                placeholder="Search..."
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setQuery(e.target.value);
                        setPageNumber(1);
                    }
                }}
            />
        </div>
    );
}