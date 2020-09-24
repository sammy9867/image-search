import React from 'react';
import { Header } from '../../components/header/Header';
import { customRender, cleanup, fireEvent } from '../../testutils/customRender';

afterEach(cleanup);

describe('<Header />', () => {
    it('renders the Header component', () => {
        const { queryByTestId, getByLabelText } = customRender( <Header />);
        expect(queryByTestId('header-light')).toBeTruthy();
        expect(queryByTestId('search-container')).toBeTruthy();
        expect(getByLabelText('switch-theme')).toBeTruthy();
    });

    it('switches to dark theme', () => {
        const { queryByTestId, getByLabelText } = customRender( <Header />);
        const switchTheme = getByLabelText('switch-theme');
        expect(switchTheme.checked).toBeFalsy();

        fireEvent.click(switchTheme);
        expect(switchTheme.checked).toBeTruthy();

        expect(queryByTestId('header-dark')).toBeTruthy();      
        expect(queryByTestId('search-container-dark')).toBeTruthy();      
    });
});