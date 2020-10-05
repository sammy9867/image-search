import React from 'react';
import { ThemeContextProvider, FavouriteContextProvider, SearchQueryContextProvider } from './context';
import { Home, Favourite, Error } from './views';
import { Header } from './components';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

export const App = () => {

  return (
      <ThemeContextProvider>
          <FavouriteContextProvider>
            <SearchQueryContextProvider>
              <Router basename="/">
                  <Header /> 
                  <Switch>
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <Route exact path="/favourite">
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