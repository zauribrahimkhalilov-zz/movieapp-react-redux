export default function(state = null, action){

	switch(action.type){

		case 'MOVIE_SELECTED': return action.payload;
		
	}

	return state;

}