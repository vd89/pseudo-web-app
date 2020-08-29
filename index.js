import Express from 'express';
import http from 'http';
import morgan from 'morgan';
import cors from 'cors';

import config from './config/default.js';
import dbController from './db/dbController.js';
import route from './routes/index.js';
const app = Express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(morgan('dev'));

//Load Router
app.use('/api/', route);

// DataBase Connection
dbController();

// Server connection`
const port = config.port;
server.listen(port, (err) => {
	if (err) {
		console.log(err);
	}
	console.log(`Server is running on the ${port}... 🌵 🌵 🌵`);
});
