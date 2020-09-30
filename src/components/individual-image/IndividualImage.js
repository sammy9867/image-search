import React, { useState, useRef }from 'react';
import { useFavouriteValue, useThemeValue } from '../../context';
import { FaDownload, FaHeart } from 'react-icons/fa';
import './IndividualImage.css'

export const IndividualImage = ({index, id, regular, alt_description}) => {

    const { isLightTheme } = useThemeValue();
    const {  globalState, dispatch } = useFavouriteValue();

    const [ isFavourite, setIsFavourite ] = useState(globalState.favList.find(x => x.id === id));
    const coverRef = useRef(null);
    const favCoverRef = useRef(null);
  
    function displayButton() {
        coverRef.current.style.zIndex = 0;
        favCoverRef.current.style.zIndex = 0;
    }

    const handleFavorite = () => {
      var action;
      if(isFavourite) {
        action = {
          type: "REMOVE_FAV",
          payload: {
            favImage: { id }
          }
        };
      }
      else {
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
        <li key={index} className="img-list-item" data-testid="img-list-item"> { 
            <div className="img-container" data-testid="img-container">
              <button
                className="favourite-button"
                data-testid="favourite-button"
                onClick={() => {handleFavorite()}}
              >
                <span className="cover favourite-icon"> 
                <FaHeart
                 color={isFavourite ? "red" : isLightTheme ? "black" : "white"} /> 
                 </span> 
                <span ref={favCoverRef}
                className= {isLightTheme ? "cover white-cover" : "cover black-cover"}
                >        
                </span>
              </button>

              <button
                className="download-button"
                data-testid="download-button"
                onClick={() => { downloadImage(id, regular)}}
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
                  src={regular}
              />
           </div> }    
          </li> 
    );

}