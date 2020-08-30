import React from 'react';

function Restaurant({ restaurant }) {
	const { Name, Area, Address, Category, Price, Phone } = restaurant;
	return (
		<div className='col-md-4 mt-1 ml-0 p-1'>
			<div className='card border-info z1'>
				<div className='card-header'> {Name}</div>
				<div className='card-body'>
					<h5 className='card-title'>Area: {Area}</h5>
					<p className='card-text'>Address: {Address}</p>
					<p className='card-text'>Category: {Category}</p>
					<p className='card-text'>Price: {Price}</p>
					<p className='card-text'>Open Now: {restaurant['Open Now']} </p>
					<p className='card-text'>Phone:{Phone}</p>
				</div>
			</div>
		</div>
	);
}

export default Restaurant;
