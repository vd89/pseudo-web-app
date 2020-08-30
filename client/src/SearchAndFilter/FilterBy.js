import React, { useState, useContext } from 'react';
import RestaurantContext from '../Context/RestaurantContext';

function FilterBy() {
	const [text, setText] = useState('');
	const restaurantContext = useContext(RestaurantContext);
	const { text1, filterRestaurant } = restaurantContext;
	const onChangeHandler = (e) => {
		setText(e.target.value);
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		filterRestaurant(text1, text);
		setText('');
	};
	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<h1>Filter by </h1>
				<div className='input-group mb-3'>
					<input
						type='text'
						className='form-control'
						value={text}
						onChange={onChangeHandler}
						placeholder='Filter by cuisines'
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
}

export default FilterBy;
