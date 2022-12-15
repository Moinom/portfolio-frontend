import express from 'express';
import * as favouritesControllers from './favouritesControllers';
const router = express.Router();

router.get('/', favouritesControllers.getAllFavourites);
router.get('/tagged', favouritesControllers.getFavouritesByTag);

export default router;
