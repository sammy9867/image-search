import React, { useRef, useCallback } from 'react';
import { IndividualImage } from '../individual-image/IndividualImage';
import {  useQueryValue, usePageNumberValue } from '../../context';
import { useImageSearch } from '../../hooks';
import './ImageGallery.css';

export const ImageGallery = () => {

  const { query } = useQueryValue();
  const { pageNumber, setPageNumber } = usePageNumberValue();
  
  const { images, loading, hasMore } = useImageSearch(query, pageNumber);

  const observer = useRef();

  const lastImageElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);
  
  return (
      <div 
        className="image-gallery"
        data-testid="image-gallery"
      >
         { 
          <ul className="image-gallery-ul" data-testid="image-gallery-ul">
              {images.map((image) => { 
                return (                  
                  <IndividualImage
                    key={image.id}
                    id={image.id}
                    regular={image.urls.regular}
                    alt_description={image.alt_description}
                  />
                );
              })}
             <span ref={lastImageElementRef}></span>   
          </ul> 
         }
      </div>
  );    
}