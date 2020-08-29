import Express from 'express';
import controller from '../controller/index.js';
const router = Express.Router();

// Get all data
router.get('/', controller.getAllData);

export default router;
