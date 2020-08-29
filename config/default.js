const config = {
	port: process.env.PORT || 5000,
	mongoUri: 'mongodb+srv://dbAdmin:Dax123@restaurantapp.ljzf8.mongodb.net/restaurantData',
	mongoOPT: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
};
export default config;
