import React from 'react';

function Restaurant() {
	return (
		<div className='col-md-4 mt-1 ml-0 p-1'>
			<div className='card border-info z1'>
				<div className='card-header'>Name Of restaurant</div>
				<div className='card-body'>
					<h5 className='card-title'>Restaurant area</h5>
					<p className='card-text'>Address</p>
					<p className='card-text'>Category</p>
					<p className='card-text'>Price</p>
					<p className='card-text'>Open Now </p>
					<p className='card-text'>Phone</p>
				</div>
			</div>
		</div>
	);
}

export default Restaurant;
