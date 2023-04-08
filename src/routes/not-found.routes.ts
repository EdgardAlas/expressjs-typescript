import { Router } from 'express';
import { notFound } from '../controllers/not-found.controller';

const router = Router();

router.get('*', notFound);

export default router;
