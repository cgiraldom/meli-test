import express from 'express';

import itemControllers from '../controllers/items';

const router = express.Router();

router.get('/api/items', itemControllers.searchItems);
router.get('/api/items/:id', itemControllers.getItem);

export default router;
