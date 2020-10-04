import React from 'react';
import { Home } from '../../views';
import { customRender, cleanup } from '../../testutils/customRender';

afterEach(cleanup);

describe('<Home />', () => {
    it('renders the Home view', () => {
        const { queryByTestId } = customRender( <Home />);
        
        expect(queryByTestId('image-gallery')).toBeTruthy();
        expect(queryByTestId('image-gallery-ul')).toBeTruthy();
    });
});