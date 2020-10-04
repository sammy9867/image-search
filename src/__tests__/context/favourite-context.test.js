import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import {  FavouriteContextProvider,  useFavouriteValue  } from '../../context';
import { clearStorage } from '../../util/localStorage';

beforeEach(() => {
    clearStorage();
})

describe('Favourite Context', () => {
    test('Adding an image to favourite', () => {
        const wrapper = ({ children }) => <FavouriteContextProvider>{children}</FavouriteContextProvider>
        const { result } = renderHook(() => useFavouriteValue(), { wrapper });
        const { dispatch } = result.current;
        const image = {
            id: "1",
            regular: "https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NjMyNX0",
            alt_description: "demo alt description"
        }

        act(() => {
            dispatch({
                type: 'ADD_FAV', 
                payload: {
                    favImage: { id: image.id, regular: image.regular, alt_description: image.alt_description }
                }
            });
        });

        expect(result.current.globalState.favList).toEqual([image]);
    });

    test('Removing an image from favourite', () => {
        const wrapper = ({ children }) => <FavouriteContextProvider>{children}</FavouriteContextProvider>
        const { result } = renderHook(() => useFavouriteValue(), { wrapper });
        const { dispatch } = result.current;
        const image = {
            id: "2",
            regular: "https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NjMyNX0",
            alt_description: "demo alt description"
        }

        act(() => {
            dispatch({
                type: 'ADD_FAV', 
                payload: {
                    favImage: { id: image.id, regular: image.regular, alt_description: image.alt_description }
                }
            });
        });

        expect(result.current.globalState.favList).toEqual([image]);

        act(() => {
            dispatch({
                type: 'REMOVE_FAV', 
                payload: {
                    favImage: { id: image.id }
                }
            });
        });
        
        expect(result.current.globalState.favList).toEqual([]);

    });
});
