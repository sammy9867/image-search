import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { addItemToStorage, getItemFromStorage } from '../util/localStorage';

export const FavouriteContext = createContext();

const initialState = {
    favList: []
};

const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_FAV":
          return addToFavourite(state, action.payload.favImage);
      case "REMOVE_FAV":
          return removeFromFavourite(state, action.payload.favImage);
      default:  
          return state;
    }
};

function addToFavourite(state, image) {
    const newFav = {
      id: image.id,
      alt_description: image.alt_description,
      regular: image.regular
    };

    return { 
        favList: [...state.favList, newFav] 
    };
}

function removeFromFavourite(state, image) {
    return {
        favList:  state.favList.filter(x => x.id !== image.id)
    };
}
  
export const FavouriteContextProvider = ({ children }) => {
    const [globalState, dispatch] = useReducer(reducer, initialState, (initialState) => {
        const persisted = getItemFromStorage("fav");
        return persisted !== null
        ? persisted
        : initialState;
    });

    useEffect(() => {
        addItemToStorage("fav", globalState);
    }, [globalState])

    return (
        <FavouriteContext.Provider value={{ globalState, dispatch}}>
            {children}
        </FavouriteContext.Provider>
    );
};

export const useFavouriteValue = () => useContext(FavouriteContext);