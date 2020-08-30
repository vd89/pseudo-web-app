import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RestaurantState from './Context/RestaurantState';

ReactDOM.render(
	<React.StrictMode>
		<RestaurantState>
			<App />
		</RestaurantState>
	</React.StrictMode>,
	document.getElementById('root')
);
