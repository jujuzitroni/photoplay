import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails/MovieDetails';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/help">
          <p>Help</p>
        </Route>
        <Route exact path="/movie/:name">
          <MovieDetails />
        </Route>
        <Route exact path="/">
          <p>Home</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
