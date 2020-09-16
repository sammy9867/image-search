import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useThemeValue, useQueryValue } from '../../../context';
import './SearchBar.css'

export const SearchBar = () => {

    const { isLightTheme } = useThemeValue();
    const  { setQuery, setPageNumber }  = useQueryValue();

    return (
        <div className={isLightTheme ? "search-container" : "search-container-dark" }>  
            <span> <FaSearch /> </span>
            <input 
                type="text" 
                className="search-bar"
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