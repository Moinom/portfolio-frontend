import express from 'express';
const router = express.Router();

router.get('/', (request, response) => {
  response.json('hi');
});

export default router;
