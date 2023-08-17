import { Request, Response, Router } from 'express';

import { CreateUserController } from './controllers/users/CreateUserController';
import { AuthUserController } from './controllers/users/AuthUserController';
import { DetailUserController } from './controllers/users/DetailUserController';

const router = Router();

//--ROTAS USER--\\
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', new DetailUserController().handle);

export { router };
