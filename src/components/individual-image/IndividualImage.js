import React, { useState, useRef } from 'react';
import { FaDownload, FaHeart } from 'react-icons/fa';
import { useFavouriteValue, useThemeValue } from '../../context';
import './IndividualImage.css';

export const IndividualImage = ({id, regular, alt_description}) => {

    const { isLightTheme } = useThemeValue();
    const { globalState, dispatch } = useFavouriteValue();

    const [isFavourite, setIsFavourite] = useState(globalState.favList.find(x => x.id === id));

    const downloadCoverRef = useRef(null);
    const favouriteCoverRef = useRef(null);
  
    function displayButtons() {
        downloadCoverRef.current.style.zIndex = 0;
        favouriteCoverRef.current.style.zIndex = 0;
    }

    const handleFavourite = (id, regular, alt_description) => {
        let action;
        if(isFavourite) {
          console.log("Rem")
          action = {
            type: "REMOVE_FAV",
            payload: {
              favImage: { id }
            }
          };
        }
        else {
          console.log("Adding")
          action = {
            type: "ADD_FAV",
            payload: {
              favImage: { id, regular, alt_description }
            }
          };
        }
      
        dispatch(action);
        setIsFavourite(!isFavourite);
    }

    const downloadImage = (idd, imageUrl)  => {
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
        <li className="img-list-item" data-testid="img-list-item"> { 
            <div className="img-container" data-testid="img-container">
              <button
                className="favourite-button"
                data-testid="favourite-button"
                aria-label="favourite button"
                onClick={() => {handleFavourite(id, regular, alt_description)}}
              >
                <span className="cover favourite-icon"> 
                  <FaHeart color={isFavourite ? "red" : isLightTheme ? "black" : "white"} /> 
                </span> 
                <span ref={favouriteCoverRef} className= {isLightTheme ? "cover white-cover" : "cover black-cover"} />        
              </button>

              <button
                className="download-button"
                data-testid="download-button"
                aria-label="download button"
                onClick={() => { downloadImage(id, regular)}}
              >
                <span className="cover download-icon"> 
                  <FaDownload color={isLightTheme ? "black" : "white"} /> 
                </span> 
                <span ref={downloadCoverRef} className= {isLightTheme ? "cover white-cover" : "cover black-cover"} />        
              </button>

               <img 
                  alt={alt_description}
                  aria-label={alt_description}
                  className="img-card"  
                  data-testid="img-card"
                  onLoad={() => {displayButtons()}}
                  src={regular}
              />
           </div> }
          </li> 
    );
}