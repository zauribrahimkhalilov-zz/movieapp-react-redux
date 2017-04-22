import React, { Component } from 'react';

import MovieList from './containers/movie-list';
import MovieDetail from './containers/movie-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <MovieList />
        <MovieDetail />
      </div>
    );
  }
}
