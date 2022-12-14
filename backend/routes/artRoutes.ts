import express from 'express';
import * as artControllers from './artControllers';
const router = express.Router();

router.get('/', artControllers.getAllArt);

export default router;
