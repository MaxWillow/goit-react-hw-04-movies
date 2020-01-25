import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

const AsyncHomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);
const AsyncMoviesPage = lazy(() =>
  import('../pages/MoviesPage' /* webpackChunkName: "movie-page" */),
);
const AsyncMovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const App = () => (
  <div>
    <Navigation />
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        <Route path="/" exact component={AsyncHomePage} />
        <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
        <Route path="/movies" component={AsyncMoviesPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default App;
