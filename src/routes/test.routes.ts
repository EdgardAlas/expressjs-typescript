import { Router } from 'express';
import { home, pong } from '../controllers/test.controller';

const router = Router();

router.get('/', home);
router.get('/test', home);
router.get('/ping', pong);

export default router;
