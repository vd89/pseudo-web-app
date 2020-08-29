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
	static async searchByAllField(options = {}) {
		try {
			const userQuery = {
				$or: [
					{ Name: { $regex: options.q, $options: 'i' } },
					{ Area: { $regex: options.q, $options: 'i' } },
					{ Address: { $regex: options.q, $options: 'i' } },
					{ Category: { $regex: options.q, $options: 'i' } },
				],
			};

			return this.aggregate([
				{ $match: userQuery },
				{ $sort: { Name: 1 } },
				{ $skip: (options.page - 1) * options.limit },
			]);
		} catch (err) {
			throw err;
		}
	}
}
restaurantSchema.loadClass(Restaurant);

export default model('restaurant', restaurantSchema);
