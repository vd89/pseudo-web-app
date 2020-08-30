import React from 'react';
import FilterBy from './FilterBy';
import SearchBy from './SearchBy';

function Index() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6'>
					<SearchBy />
				</div>
				<div className='col-md-6'>
					<FilterBy />
				</div>
			</div>
		</div>
	);
}

export default Index;
