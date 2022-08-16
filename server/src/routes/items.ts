import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';

import itemControllers from '../controllers/items';
import { errorHandler } from '../exceptions/handler';

const router = express.Router();

router.get('/api/items', itemControllers.searchItems);
router.get('/api/items/:id', itemControllers.getItem);

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler.handleError(err, res);
});

export default router;
