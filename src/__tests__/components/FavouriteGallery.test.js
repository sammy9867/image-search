import React from 'react';
import { FavouriteGallery } from '../../components';
import { customRender, cleanup } from '../../testutils/customRender';

afterEach(cleanup);

describe('<FavouriteGallery />', () => {
    it('renders the FavouriteGallery component', () => {
        const { queryByTestId } = customRender( <FavouriteGallery />);

        expect(queryByTestId('fav-gallery')).toBeTruthy();
        expect(queryByTestId('fav-gallery-ul')).toBeTruthy();
    });
});