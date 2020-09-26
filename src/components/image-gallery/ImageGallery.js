import React, { useRef, useCallback } from 'react';
import { useThemeValue, useQueryValue, usePageNumberValue } from '../../context';
import { useImageSearch } from '../../hooks';
import './ImageGallery.css'
import { IndividualImage } from './IndividualImage'


export const ImageGallery = () => {

  const { isLightTheme } = useThemeValue();

  const { query } = useQueryValue();
  const { pageNumber, setPageNumber } = usePageNumberValue();
  
  const { images, loading, hasMore } = useImageSearch(query, pageNumber);
  const observer = useRef();
  const lastImageElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    })
    if (node) observer.current.observe(node);
}, [loading, hasMore])

  isLightTheme ? 
    document.getElementsByTagName('body')[0].setAttribute('style', 'background-color:#F0F2F5') :
    document.getElementsByTagName('body')[0].setAttribute('style', 'background-color:black');
  
 
  return (
      <div 
        className="image-gallery "
        data-testid="image-gallery"
      >
         { 
          <ul data-testid="image-gallery-ul">
              {images.map((image, index) => { 
                return (                  
                  <IndividualImage 
                    index={index}
                    id={image.id}
                    urls={image.urls}
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