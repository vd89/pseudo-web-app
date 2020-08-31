import React from 'react';

const Pagination = ({ restaurantPerPage, totalRestaurants, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalRestaurants / restaurantPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map((number, key) => (
					<li key={key} className='page-item'>
						<a onClick={() => paginate(number)} href='!#' className='page-link'>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
