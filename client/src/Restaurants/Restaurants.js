import React, { useContext, useEffect } from 'react';
import Restaurant from './Restaurant';
import Spinner from '../Spinner/Spinner';
import RestaurantContext from '../Context/RestaurantContext';

function Restaurants() {
	const restaurantContext = useContext(RestaurantContext);
	const { allRestaurants, restaurants, loading } = restaurantContext;

	useEffect(() => {
		allRestaurants();
	}, []);

	if (loading) {
		return <Spinner />;
	} else if (restaurants.length === 0) {
		return (
			<div className='container center'>
				<h3>No restaurant found please search again</h3>
			</div>
		);
	} else {
		return (
			<div className='m-5'>
				<div id='outputData'>
					<div className='row'>
						{restaurants.map((restaurant, key) => (
							<Restaurant key={key} restaurant={restaurant} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Restaurants;
