import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const restaurantSchema = new Schema({
	Name: { type: String },
	Tags: { type: String },
	Area: { type: String },
	Address: { type: String },
	Category: { type: String },
	Price: { type: String },
	Timings: { type: String },
	Phone: { type: String },
});

class Restaurant {
	static async getAllDataFromModel(options = {}) {
		try {
			return this.aggregate([
				{ $sort: { Name: 1 } },
				{ $skip: (options.page - 1) * options.limit },
				{ $limit: options.limit },
			]);
		} catch (err) {
			throw err;
		}
	}
}
restaurantSchema.loadClass(Restaurant);

export default model('restaurant', restaurantSchema);
