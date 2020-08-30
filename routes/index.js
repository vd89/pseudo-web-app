import Express from 'express';
import controller from '../controller/index.js';
const router = Express.Router();

// Get all data
router.get('/', controller.getAllData); // http://localhost:5000/api
router.get('/search', controller.searchBy);
export default router;
