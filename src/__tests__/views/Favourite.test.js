import React from 'react';
import { Favourite } from '../../views';
import { customRender, cleanup } from '../../testutils/customRender';

afterEach(cleanup);

describe('<Favourite />', () => {
    it('renders the Favourite view', () => {
        const { queryByTestId } = customRender( <Favourite />);

        expect(queryByTestId('fav-gallery')).toBeTruthy();
        expect(queryByTestId('fav-gallery-ul')).toBeTruthy();
    });
});