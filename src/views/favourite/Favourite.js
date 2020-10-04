import React from 'react';
import { FavouriteGallery } from '../../components';
import { useThemeValue } from '../../context';

export const Favourite = () => {

    const { isLightTheme } = useThemeValue();

    isLightTheme 
    ? document.getElementsByTagName('body')[0].setAttribute('style', 'background-color:#F0F2F5')
    : document.getElementsByTagName('body')[0].setAttribute('style', 'background-color:black');

    return (
        <>
        <FavouriteGallery />
        </>
    );
}