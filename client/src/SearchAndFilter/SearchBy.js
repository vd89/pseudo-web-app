import React, { useContext } from 'react';
import RestaurantContext from '../Context/RestaurantContext';

const SearchBy = () => {
	const restaurantContext = useContext(RestaurantContext);
	const { searchRestaurant, text1, setText1 } = restaurantContext;
	const onChangeHandler = (e) => {
		setText1(e.target.value);
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		searchRestaurant(text1);
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<h1>Search By </h1>
				<div className='input-group mb-3'>
					<input
						type='text'
						className='form-control'
						value={text1}
						onChange={onChangeHandler}
						placeholder='Search By '
					/>
					<div className='input-group-append'>
						<button className='btn btn-outline-primary' type='submit' id='button-addon2'>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SearchBy;
