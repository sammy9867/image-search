import React from 'react';
import { IndividualImage } from '../../components/image-gallery/IndividualImage';
import { customRender, cleanup } from '../../testutils/customRender';

afterEach(cleanup);

describe('<IndividualImage />', () => {
    it('renders the IndividualImage component', () => {
        const { queryByTestId } = customRender( <IndividualImage index={1} id="id1" urls={{regular: "link"}} alt_description="desc"/>);
        expect(queryByTestId('img-list-item')).toBeTruthy();
        expect(queryByTestId('img-container')).toBeTruthy();
        expect(queryByTestId('download-button')).toBeTruthy();
        expect(queryByTestId('img-card')).toBeTruthy()
    });
});