import Express from 'express';
import http from 'http';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

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

// deploy static files
if (process.env.NODE_ENV == 'production') {
	app.use(Express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

//Load Router
app.use('/api/', route);

// DataBase Connection
dbController();

// Server connection`
const port = process.env.PORT || 5000;
server.listen(port, (err) => {
	if (err) {
		console.log(err);
	}
	console.log(`Server is running on the ${port}... 🌵 🌵 🌵`);
});
