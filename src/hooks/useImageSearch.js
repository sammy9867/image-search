import { useState, useEffect } from 'react';
import { BASE_URL, CLIENT_ID } from '../util/constants';
import axios from 'axios';

export const useImageSearch = (query, pageNumber) => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [images, setImages] = useState([])
  const [hasMore, setHasMore] = useState(false)
    
  useEffect(() => {
    setImages([]);
  }, [query])

  useEffect(() => {
    setLoading(true);
    setError(false);

    async function fetchImages() {
      await axios({
        method: 'GET',
        url: BASE_URL,
        params: { client_id: CLIENT_ID, query: query, page: pageNumber },
      }).then(res => {
          setImages(prevImages => (
              [...prevImages, ...res.data.results]
          ))
        setHasMore(res.data.results.length > 0)
        setLoading(false)
      }).catch(e => {
        setError(true)
      })
    }

    fetchImages();
  

  }, [query, pageNumber]);
  
  return { loading, error, images, hasMore }
}
