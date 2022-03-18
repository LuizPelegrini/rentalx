/**
 * Main file to speficy all the application routes
 */

import { Router } from 'express';

import { categoriesRouter } from './categories.routes';
import { specificationsRouter } from './specifications.routes';

// create Main Router to attach the sub-routers based on the resource
const router = Router();
router.use('/categories', categoriesRouter);
router.use('/specifications', specificationsRouter);

export default router;
