import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import BeerController from './app/controllers/BeerController';

import authMiddleware from './app/middlewares/auth';
import SearchController from './app/controllers/SearchController';

const routes = Router();

routes.post('/users', UserController.store).get('/users', UserController.index);
routes.post('/sessions', SessionController.store);
routes.get('/beers', BeerController.index);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/beers', BeerController.store);
routes.get('/searchU', SearchController.searchUsers);
routes.get('/searchB', SearchController.searchBeers);

export default routes;
