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

export default model('restaurant', restaurantSchema);
