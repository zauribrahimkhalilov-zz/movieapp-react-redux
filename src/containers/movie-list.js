import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/index';
import { bindActionCreators } from 'redux';

class MovieList extends Component {

  renderList() {
    return this.props.movies.map((movie) => {
      return (
        <li
          key={movie.name}
          onClick={() => this.props.selectMovie(movie)}
          className="list-group-item">
          <img src={movie.imagePath} alt="" /> {movie.name} ({movie.year})
        </li>
      );
    });
  }

  render() {
    return (
      <div className="col-md-6">
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectMovie: selectMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
