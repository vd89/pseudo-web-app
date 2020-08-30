import React from 'react';

function FilterBy() {
	return (
		<div>
			<form action='' id='filterForm'>
				<h1>Filter section</h1>
				<div className='input-group mb-3'>
					<input
						type='text'
						className='form-control'
						id='filterCousins'
						placeholder='Filter by Cousins'
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
