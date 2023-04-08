import { Router } from 'express';
import testRoute from './test.routes';

const routes = Router();

routes.use('/', testRoute);

export default routes;
