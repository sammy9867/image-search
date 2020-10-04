import React from 'react';
import { render } from '@testing-library/react';
import {
        ThemeContextProvider, 
        FavouriteContextProvider, 
        SearchQueryContextProvider, 
        useThemeValue, 
        useFavouriteValue, 
        usePageNumberValue,
        useQueryValue 
} from '../context';
import { BrowserRouter } from 'react-router-dom';

export const customRender = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)
    return render(
        <ThemeContextProvider>
            <FavouriteContextProvider>
                <SearchQueryContextProvider>
                    {ui}
                </SearchQueryContextProvider>
            </FavouriteContextProvider>
        </ThemeContextProvider>
    , { wrapper: BrowserRouter });
}   

export * from "@testing-library/react";

export { 
    ThemeContextProvider,
    FavouriteContextProvider, 
    SearchQueryContextProvider, 
    useThemeValue, 
    useFavouriteValue, 
    useQueryValue, 
    usePageNumberValue 
};