import React, { useContext, useEffect, useState } from 'react';
import Restaurant from './Restaurant';
import Spinner from '../Spinner/Spinner';
import RestaurantContext from '../Context/RestaurantContext';
import Pagination from './Pagination';

function Restaurants() {
	const [currentPage, setCurrentPage] = useState(1);
	const [restaurantPerPage] = useState(15);

	const restaurantContext = useContext(RestaurantContext);
	const { allRestaurants, restaurants, loading } = restaurantContext;

	useEffect(() => {
		allRestaurants();
	}, []);

	// Get current restaurants
	const indexOfLastRestaurant = currentPage * restaurantPerPage;
	const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantPerPage;
	const restaurantAll = restaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
					<Pagination
						restaurantPerPage={restaurantPerPage}
						totalRestaurants={restaurants.length}
						paginate={paginate}
					/>
					<div className='row'>
						{restaurantAll.map((restaurant, key) => (
							<Restaurant key={key} restaurant={restaurant} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Restaurants;
