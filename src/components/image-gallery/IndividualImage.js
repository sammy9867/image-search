import React, { useRef }from 'react';
import { useThemeValue } from '../../context';
import { FaDownload } from 'react-icons/fa';
import './ImageGallery.css'


export const IndividualImage = ({index, id, urls, alt_description}) => {

    
    const { isLightTheme } = useThemeValue();

    const coverRef = useRef(null);
  
    function displayButton() {
        coverRef.current.style.zIndex = 0;
    }


    const downloadImage = (idd, imageUrl) => {
        fetch(imageUrl, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then((buffer) => {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", `${idd}.png`);
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
      };

    return (
        <li key={index} className="img-list-item" data-testid="img-list-item"> { 
            <div className="img-container" data-testid="img-container">
              <button
                className="download-button"
                data-testid="download-button"
                onClick={() => { downloadImage(id, urls.regular)}}
              >
                <span className="cover download-icon"> <FaDownload color={isLightTheme ? "black" : "white"} /> </span> 
                <span ref={coverRef}
                className= {isLightTheme ? "cover white-cover" : "cover black-cover"}
                >        
                </span>
              </button>
               <img 
                  alt={alt_description}
                  className="img-card"  
                  data-testid="img-card"
                  onLoad={() => {displayButton()}}
                  src={urls.regular}
              />
           </div> }    
          </li> 
    );

}