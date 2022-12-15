import express from 'express';
import * as favouritesControllers from './favouritesControllers';
const router = express.Router();

router.get('/', favouritesControllers.getFavouritesByTag);

export default router;
