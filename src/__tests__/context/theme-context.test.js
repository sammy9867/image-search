import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import {  ThemeContextProvider,  useThemeValue  } from '../../context';

describe('Theme Context', () => {
    test('useThemeValue has light mode', () => {
        const wrapper = ({ children }) => <ThemeContextProvider>{children}</ThemeContextProvider>
        const { result } = renderHook(() => useThemeValue(), { wrapper });

        act(() => {
            result.current.setIsLightTheme(true);
        });

        expect(result.current.isLightTheme).toBe(true);
    });

    test('useThemeValue has dark mode', () => {
        const wrapper = ({ children }) => <ThemeContextProvider>{children}</ThemeContextProvider>
        const { result } = renderHook(() => useThemeValue(), { wrapper });

        act(() => {
            result.current.setIsLightTheme(false);
        });

        expect(result.current.isLightTheme).toBe(false);
    });
});
