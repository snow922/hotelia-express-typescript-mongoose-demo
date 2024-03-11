import express from 'express';
import { ROUTES } from '../enums/api.enum';
import landingRouter from './landing.route';

const router = express.Router();

router.use(ROUTES.LANDING, landingRouter);

export default router;
