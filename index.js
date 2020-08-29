import Express from 'express';
import http from 'http';

import config from './config/default.js';
import dbController from './db/dbController.js';

const app = Express();
const server = http.createServer(app);

dbController();

const port = config.port;
server.listen(port, (err) => {
	if (err) {
		console.log(err);
	}
	console.log(`Server is running on the ${port}... 🌵 🌵 🌵`);
});
