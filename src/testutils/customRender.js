import React from 'react';
import { render } from '@testing-library/react';
import { ThemeContextProvider, SearchQueryContextProvider, useThemeValue, usePageNumberValue, useQueryValue } from '../context';

export const customRender = (ui) => {
    return render(
        <ThemeContextProvider>
                <SearchQueryContextProvider>
                    {ui}
                </SearchQueryContextProvider>
        </ThemeContextProvider>
    );
}   

export * from "@testing-library/react";

export { ThemeContextProvider, SearchQueryContextProvider, useThemeValue, useQueryValue, usePageNumberValue };