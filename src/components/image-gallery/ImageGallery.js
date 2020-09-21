import React, { useRef, useCallback }from 'react';
import { useThemeValue, useQueryValue } from '../../context';
import { useImageSearch } from '../../hooks';
import { FaDownload } from 'react-icons/fa';

import './ImageGallery.css'

export const ImageGallery = () => {

    const { isLightTheme } = useThemeValue();

    const { setPageNumber } = useQueryValue();
    
    const { images, hasMore, loading } = useImageSearch();

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
            response.arrayBuffer().then(function(buffer) {
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
        <div className="image-gallery ">
           { 
            <ul>
                {images.map((image, index) => {
                    if (images.length === index + 1) {
                      return  (
                        <li key={index} className="list"> {    
                          <div className="img-container">
                            <img 
                              alt={image.alt_description}
                              className="card"  
                              ref={lastImageElementRef} 
                              src={image.urls.regular}
                            />
                            <button
                              className="downloadButton"
                              onClick={() => { downloadImage(image.id, image.urls.regular)}}
                             >
                                <FaDownload color="black" />
                            </button> 
                          </div> }   
                        </li> )
                    } else {
                        return  (
                            <li key={index} className="list"> { 
                              <div className="img-container">
                                 <img 
                                    alt={image.alt_description}
                                    className="card"  
                                    src={image.urls.regular}
                                />
                                <button
                                  className="downloadButton"
                                  onClick={() => { downloadImage(image.id, image.urls.regular)}}
                                >
                                    <FaDownload color="black" />
                                </button>
                             </div> }    
                            </li> )
                    }})}
            </ul> 
           }
        </div>
    );    
}