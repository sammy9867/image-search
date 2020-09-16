import React, { createContext, useContext, useState } from 'react';

export const SearchQueryContext = createContext();

export const  SearchQueryContextProvider = ({ children }) => {
  const [ query, setQuery ] = useState("mountains");
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <SearchQueryContext.Provider value={{query, setQuery, pageNumber, setPageNumber}}>
      {children}
    </SearchQueryContext.Provider>
  );
};

export const useQueryValue = () => useContext(SearchQueryContext);