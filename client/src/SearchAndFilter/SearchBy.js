import React from 'react';

const SearchBy = () => {
	return (
		<div className='form-group'>
			<h1>Search section</h1>
			<input
				type='text'
				className='form-control'
				id='searchField'
				placeholder='Enter your search here'
			/>
		</div>
	);
};

export default SearchBy;
