import express from 'express';
import { getServer } from '../controllers/serverhop.controllers.js';

const router = express.Router();

router.get('/', getServer);

export default router;
