import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import T from 'prop-types';
import AdditionalInformation from '../components/AdditionalInformation/AdditionalInformation';
import * as API from '../services/movie_api';

const AsyncCast = lazy(() =>
  import('./Cast' /* webpackChunkName: "cast-page" */),
);

const AsyncRewiews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews-page" */),
);

class MovieDetailsPage extends Component {
  static propTypes = {
    match: T.shape({
      params: T.shape({
        movieId: T.string,
      }),
    }).isRequired,
    history: T.shape({
      push: T.func,
    }).isRequired,
    location: T.shape({
      state: T.shape({
        from: T.shape({}),
      }),
    }).isRequired,
  };

  state = {
    movieDetails: null,
  };

  componentDidMount() {
    const { match } = this.props;
    API.fetchDetailsAboutMovie(match.params.movieId)
      .then(res => this.setState({ movieDetails: res.data }))
      .catch(err => {
        throw new Error(err);
      });
  }

  onGoBack = () => {
    const { history, location } = this.props;

    if (location.state) {
      history.push(location.state.from);
      return;
    }

    history.push('/movies');
  };

  render() {
    const { match, location } = this.props;
    const { movieDetails } = this.state;

    return (
      <>
        {movieDetails && (
          <>
            <button type="button" onClick={this.onGoBack}>
              Go back
            </button>
            <h2>{movieDetails.original_title}</h2>
            <p>{`User score: ${movieDetails.vote_average}`}</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h4>Genres</h4>
            {movieDetails.genres.length > 0 && (
              <ul>
                {movieDetails.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            )}
            <img
              src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
              alt={movieDetails.original_title}
            />
            <AdditionalInformation
              movieId={match.params.movieId}
              location={location}
            />
            <Suspense fallback={<h2>Loading...</h2>}>
              <Switch>
                <Route path="/movies/:movieId/cast" component={AsyncCast} />
                <Route
                  path="/movies/:movieId/reviews"
                  component={AsyncRewiews}
                />
              </Switch>
            </Suspense>
          </>
        )}
      </>
    );
  }
}
export default MovieDetailsPage;
