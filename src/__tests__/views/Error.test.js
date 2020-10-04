import React from 'react';
import { Error } from '../../views';
import { customRender, cleanup } from '../../testutils/customRender';

afterEach(cleanup);

describe('<Error />', () => {
    it('renders the Error view', () => {
        const { queryByTestId, queryByText } = customRender( <Error />);

        expect(queryByTestId('error')).toBeTruthy();
        expect(queryByText('Oops! Page not found.')).toBeTruthy();
        expect(queryByText('404')).toBeTruthy();
        expect(queryByText('Sorry, this page isn\'t available.')).toBeTruthy();
    });
});