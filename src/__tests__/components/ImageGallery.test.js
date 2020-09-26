import React from 'react';
import { ImageGallery } from '../../components/image-gallery/ImageGallery';
import { customRender, cleanup } from '../../testutils/customRender';

afterEach(cleanup);

describe('<ImageGallery />', () => {
    it('renders the ImageGallery component', async () => {
        const { queryByTestId } = customRender( <ImageGallery />);

        expect(queryByTestId('image-gallery')).toBeTruthy();
        expect(queryByTestId('image-gallery-ul')).toBeTruthy();
    });
});