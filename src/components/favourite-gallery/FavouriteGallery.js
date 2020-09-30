import React from 'react';
import { useFavouriteValue } from '../../context';
import { IndividualImage } from '../individual-image/IndividualImage';

import './FavouriteGallery.css'

export const FavouriteGallery = () => {

  const { globalState } = useFavouriteValue();

  return (
      <div 
        className="fav-gallery "
        data-testid="fav-gallery"
      >
         { 
          <ul data-testid="fav-gallery-ul">
              {globalState.favList.map((fav, index) => { 
                return (                  
                  <IndividualImage
                    index={index}
                    id={fav.id}
                    regular={fav.regular}
                    alt_description={fav.alt_description}
                  />
                );
              })}
          </ul> 
         }
      </div>
  );    
}