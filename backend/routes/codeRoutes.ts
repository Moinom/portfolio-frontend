import express from 'express';
import * as codeControllers from './codeControllers';
const router = express.Router();

router.get('/', codeControllers.getAllCode);
router.get('/tagged', codeControllers.getCodeByTag);

export default router;
