import React, { Component } from 'react';
import T from 'prop-types';
import * as API from '../services/movie_api';

class Cast extends Component {
  static propTypes = {
    match: T.shape({
      params: T.shape({
        movieId: T.string,
      }),
    }).isRequired,
  };

  state = {
    castList: [],
  };

  componentDidMount() {
    const { match } = this.props;

    API.fetchMovieCast(match.params.movieId)
      .then(res => this.setState({ castList: res.data.cast }))
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    const { castList } = this.state;

    return (
      <div>
        {castList.length > 0 && (
          <ul>
            {castList.map(el => (
              <li key={el.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                  alt={el.name}
                />
                <p>{el.name}</p>
                <p>{`Character: ${el.character}`}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Cast;
