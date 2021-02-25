import express from 'express';
const router = express.Router();

import proController from '../controllers/pro';

router.get('/test', proController.test);
router.get('/user/games', proController.games);

export default router;
