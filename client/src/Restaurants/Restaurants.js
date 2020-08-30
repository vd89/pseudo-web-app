import React, { useContext, useEffect } from 'react';
import Restaurant from './Restaurant';
import RestaurantContext from '../Context/RestaurantContext';

function Restaurants() {
	const restaurantContext = useContext(RestaurantContext);
	const { allRestaurants, restaurants } = restaurantContext;

	useEffect(() => {
		allRestaurants();
	}, []);
	return (
		<div className='m-5'>
			<div id='outputData'>
				<div className='row'>
					{restaurants.map((restaurant) => (
						<Restaurant key={restaurant.id} restaurant={restaurant} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Restaurants;
