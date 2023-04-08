import { Router } from 'express';
import { home, pong, validateBody } from '../controllers/test.controller';
import { bodyValidation } from '../validations/test.validation';

const router = Router();

router.get('/', home);
router.get('/ping', pong);
router.post('/', bodyValidation, validateBody);

export default router;
