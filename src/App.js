import React from 'react';
import { Header, ImageGallery } from './components';
import { ThemeContextProvider, SearchQueryContextProvider } from './context';

export const App = () => {

  return (
    <ThemeContextProvider>
      <SearchQueryContextProvider>
          <Header />
          <ImageGallery />
      </SearchQueryContextProvider>
    </ThemeContextProvider>
  );
}