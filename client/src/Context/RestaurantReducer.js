import {
	ALL_RESTAURANTS,
	SEARCH_RESTAURANTS,
	FILTER_RESTAURANTS,
	SET_LOADING,
	SET_TEXT1,
} from '../types';

export default (state, action) => {
	console.log('Action->', action);
	switch (action.type) {
		case ALL_RESTAURANTS:
			return {
				...state,
				restaurants: action.payload.data.result,
				loading: false,
			};
		case SEARCH_RESTAURANTS:
		case FILTER_RESTAURANTS:
			return {
				...state,
				restaurants: action.payload.data.result,
				loading: false,
			};
		case SET_TEXT1:
			return {
				...state,
				text1: action.payload,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
