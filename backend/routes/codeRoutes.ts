import express from 'express';
import * as codeControllers from './codeControllers';
const router = express.Router();

router.get('/', codeControllers.getCodeByTag);

export default router;
