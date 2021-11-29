import express from 'express';
import { getLowPlayerServer } from '../controllers/serverhop.controllers.js';

const router = express.Router();

router.get('/low-player-server', getLowPlayerServer);

export default router;
