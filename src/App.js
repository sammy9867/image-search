import React from 'react';
import { ThemeContextProvider, FavouriteContextProvider, SearchQueryContextProvider } from './context';
import { Home, Favourite, Error } from './views';
import { Header } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';

export const App = () => {

  return (
      <ThemeContextProvider>
          <FavouriteContextProvider>
            <SearchQueryContextProvider>
              <Router>
                  <Switch>
                      <Route exact path="/">
                          <Header /> 
                          <Home />
                      </Route>
                      <Route path="/favourite">
                          <Header />
                          <Favourite />
                      </Route>
                      <Router path="*">
                          <Error />
                      </Router>
                  </Switch>
              </Router>
            </SearchQueryContextProvider>
          </FavouriteContextProvider>
      </ThemeContextProvider>
  );
}