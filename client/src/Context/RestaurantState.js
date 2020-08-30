import React, { useReducer } from 'react';
import Axios from 'axios';
import RestaurantContext from './RestaurantContext';
import RestaurantReducer from './RestaurantReducer';

import {
	ALL_RESTAURANTS,
	SEARCH_RESTAURANTS,
	FILTER_RESTAURANTS,
	SET_LOADING,
	SET_TEXT1,
} from '../types';

const RestaurantState = (props) => {
	const initialState = {
		restaurants: [],
		loading: false,
		text1: '',
	};
	const [state, dispatch] = useReducer(RestaurantReducer, initialState);

	const setLoading = () => {
		dispatch({
			type: SET_LOADING,
		});
	};

	// All Restaurants
	const allRestaurants = async () => {
		setLoading();
		const res = await Axios.get('http://localhost:5000/api');
		dispatch({
			type: ALL_RESTAURANTS,
			payload: res.data,
		});
	};

	const searchRestaurant = async (text) => {
		setLoading();
		const res = await Axios.get('http://localhost:5000/api/search', {
			params: {
				page: 1,
				limit: 24,
				q: text,
			},
		});
		dispatch({
			type: SEARCH_RESTAURANTS,
			payload: res.data,
		});
	};

	const setText1 = (text) => {
		dispatch({
			type: SET_TEXT1,
			payload: text,
		});
	};

	const filterRestaurant = async (text, text2) => {
		setLoading();
		const res = await Axios.get('http://localhost:5000/api/search', {
			params: {
				page: 1,
				limit: 24,
				q: text,
				f: text2,
			},
		});
		dispatch({
			type: FILTER_RESTAURANTS,
			payload: res.data,
		});
	};
	return (
		<RestaurantContext.Provider
			value={{
				restaurants: state.restaurants,
				loading: state.loading,
				text1: state.text1,
				allRestaurants,
				searchRestaurant,
				setText1,
				filterRestaurant,
			}}>
			{props.children}
		</RestaurantContext.Provider>
	);
};

export default RestaurantState;
