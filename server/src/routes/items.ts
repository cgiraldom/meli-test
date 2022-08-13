import express from 'express';

import itemControllers from '../controllers/items';

const router = express.Router();

router.get('/items?search=', itemControllers.searchItems);

export default router;
