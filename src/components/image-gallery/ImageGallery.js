import React, { useRef, useCallback }from 'react';
import { useThemeValue, useQueryValue, usePageNumberValue } from '../../context';
import { useImageSearch } from '../../hooks';
import { FaDownload } from 'react-icons/fa';

import './ImageGallery.css'

export const ImageGallery = () => {

    const { isLightTheme } = useThemeValue();

    const { query } = useQueryValue();
    const { pageNumber, setPageNumber } = usePageNumberValue();
    
    const { images, hasMore, loading } = useImageSearch(query, pageNumber);

    isLightTheme ? 
      document.getElementsByTagName('body')[0].setAttribute('style', 'background-color:#F0F2F5') :
      document.getElementsByTagName('body')[0].setAttribute('style', 'background-color:black');
    
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


    const downloadImage = (id, imageUrl) => {
        fetch(imageUrl, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then((buffer) => {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", `${id}.png`);
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
      };

    return (
        <div 
          className="image-gallery "
          data-testid="image-gallery"
        >
           { 
            <ul>
                {images.map((image, index) => {
                    if (images.length === index + 1) {
                      return  (
                        <li key={index} className="img-list-item" data-testid="img-list-item"> {    
                          <div className="img-container" data-testid="img-container">
                             <button
                              className="download-button"
                              data-testid="download-button"
                              onClick={() => { downloadImage(image.id, image.urls.regular)}}
                             >
                                <FaDownload color="black" />
                            </button> 
                            <img 
                              alt={image.alt_description}
                              className="img-card"  
                              data-testid="img-card"
                              ref={lastImageElementRef} 
                              src={image.urls.regular}
                            />
  
                          </div> }   
                        </li> )
                    } else {
                        return  (
                            <li key={index} className="img-list-item" data-testid="img-list-item"> { 
                              <div className="img-container" data-testid="img-container">
                                <button
                                  className="download-button"
                                  data-testid="download-button"
                                  onClick={() => { downloadImage(image.id, image.urls.regular)}}
                                >
                                    <FaDownload color="black" />
                                </button>
                                 <img 
                                    alt={image.alt_description}
                                    className="img-card"  
                                    data-testid="img-card"
                                    src={image.urls.regular}
                                />
                             </div> }    
                            </li> )
                    }})}
            </ul> 
           }
        </div>
    );    
}