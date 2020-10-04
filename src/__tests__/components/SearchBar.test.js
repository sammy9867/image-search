import React from 'react';
import { SearchBar } from '../../components';
import { customRender, cleanup, fireEvent } from '../../testutils/customRender';

afterEach(cleanup);

describe('<SearchBar />', () => {
    it('renders the SearchBar component', () => {
        const { queryByTestId, getByLabelText } = customRender( <SearchBar />);
        expect(queryByTestId('search-container')).toBeTruthy();
        expect(queryByTestId('search-icon')).toBeTruthy();
        expect(getByLabelText('search bar')).toBeTruthy();
    });

    it('should allow any text to be typed as the search query', () => {
        const { getByLabelText } = customRender( <SearchBar />);
        const inputText = getByLabelText('search bar');

        fireEvent.change(inputText, { target: { value: 'apple' } })
        expect(inputText.value).toBe('apple');

        fireEvent.change(inputText, { target: { value: '123' } })
        expect(inputText.value).toBe('123');

        fireEvent.change(inputText, { target: { value: 'black' } })
        expect(inputText.value).toBe('black');
    });
});