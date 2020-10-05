import React from 'react';
import { IndividualImage } from '../individual-image/IndividualImage';
import { useFavouriteValue } from '../../context';
import './FavouriteGallery.css';

export const FavouriteGallery = () => {

  const { globalState } = useFavouriteValue();

  return (
      <div 
        className="fav-gallery"
        data-testid="fav-gallery"
      >
         { 
          <ul className="fav-gallery-ul" data-testid="fav-gallery-ul">
              {globalState.favList.map((fav) => { 
                return (                  
                  <IndividualImage
                    key={fav.id}
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