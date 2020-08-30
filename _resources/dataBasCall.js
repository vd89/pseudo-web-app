class DataBaseCall {
	constructor() {
		this.restaurants = [];
	}
	async getAllRestaurants() {
		const restData = await axios
			.get('http://localhost:5000/api')
			.then((result) => {
				console.log(result);
				return result;
			})
			.catch((err) => {
				console.log(err);
			});
		console.log(' 🔍', restData);
		return restData;
	}
}
