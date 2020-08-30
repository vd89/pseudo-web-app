const searchRestaurant = document.getElementById('searchField');
const searchFromFilter = document.getElementById('filterCousins');
const filterFormData = document.getElementById('filterForm');

const restaData = new DataBaseCall();
const getAllData = async () => {
	try {
		const resData = await restaData.getAllRestaurants();
		return resData;
	} catch (err) {
		console.log(err);
	}
};
console.log(getAllData());
searchRestaurant.addEventListener('keyup', (e) => {
	const searchData = e.target.value;
	console.log(searchData);
});

filterFormData.addEventListener('submit', (e) => {
	e.preventDefault();
	const filterData = searchFromFilter.value;
	console.log(filterData);
});
