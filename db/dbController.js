import mongoose from 'mongoose';
import config from '../config/default.js';

const { mongoOPT, mongoUri } = config;
const { connect } = mongoose;

export default async () => {
	try {
		await connect(mongoUri, mongoOPT);
		console.log(`Database is connected with the server.... 🚀 🚀 🚀`);
	} catch (err) {
		console.log(err);
	}
};
