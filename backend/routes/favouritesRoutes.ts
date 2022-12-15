import express from 'express';
import * as favouritesControllers from '../controllers/favouritesControllers';
const router = express.Router();

router.get('/', favouritesControllers.getFavouritesByTag);

export default router;
