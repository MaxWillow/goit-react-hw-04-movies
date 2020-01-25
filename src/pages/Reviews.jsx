import React, { Component } from 'react';
import T from 'prop-types';
import * as API from '../services/movie_api';

class Reviews extends Component {
  static propTypes = {
    match: T.shape({
      params: T.shape({
        movieId: T.string,
      }),
    }).isRequired,
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    const { match } = this.props;

    API.fetchMovieReviews(match.params.movieId)
      .then(res => this.setState({ reviews: res.data.results }))
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>{`Author: ${review.author}`}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We do not have any reviews for this movie. Be the first!</p>
        )}
      </div>
    );
  }
}

export default Reviews;
