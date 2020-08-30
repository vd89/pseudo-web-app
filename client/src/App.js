import React from 'react';

import './App.css';
import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';
import Jumbotron from './Jumbotron/Jumbotron';
import SearchAndFilter from './SearchAndFilter/Index';
import Restaurants from './Restaurants/Restaurants';

function App() {
	return (
		<>
			<Header />
			<Jumbotron />
			<SearchAndFilter />
			<Restaurants />
			<Footer />
		</>
	);
}

export default App;
