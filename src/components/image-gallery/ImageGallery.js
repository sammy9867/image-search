import React, { useRef, useCallback }from 'react';
import { useThemeValue, useQueryValue } from '../../context';
import { useImageSearch } from '../../hooks';
import { CircleLoading } from 'react-loadingg';

import './ImageGallery.css'

export const ImageGallery = () => {

    const { isLightTheme } = useThemeValue();

    const { setPageNumber } = useQueryValue();
    
    const { images, hasMore, loading } = useImageSearch()

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

    return (
        <div className="image-gallery ">
           { 
            <ul>
                {images.map((image, index) => {
                    if (images.length === index + 1) {
                      return  (
                        <li key={index} className="list">
                        { <img alt="des" className="card"  ref={lastImageElementRef} src={image.urls.regular} /> }
                        </li>
                        )
                    } else {
                        return  (
                            <li key={index} className="list">
                            { <img alt="des" className="card"  src={image.urls.regular} /> }
                            </li>
                       )
                    }
                })}
            </ul> 
            }
        </div>
    );    
}