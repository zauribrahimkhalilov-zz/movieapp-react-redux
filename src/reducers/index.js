import { combineReducers } from 'redux';
import MoviesReducer from './reducer_movies';
import ActiveMovie from './reducer_active_movie';

const rootReducer = combineReducers({
	movies: MoviesReducer,
	activeMovie: ActiveMovie
});

export default rootReducer;