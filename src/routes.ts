import { Request, Response, Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import uploadConfig from './config/multer';
import { CreateProductController } from './controllers/product/CreateProductController';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

//--ROTAS USER--\\
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', new DetailUserController().handle);

//--ROTAS CATEGORY--\\
router.post('/category', new CreateCategoryController().handle);
router.get('/category', new ListCategoryController().handle);

router.post(
  '/product',
  upload.single('file'),
  new CreateProductController().handle,
);

export { router };
