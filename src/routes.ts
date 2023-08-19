import { Request, Response, Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import uploadConfig from './config/multer';
import { CreateOrderController } from './controllers/order/CreateOrderController';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

//--ROTAS USER--\\
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', new DetailUserController().handle);

//--ROTAS CATEGORY--\\
router.post('/category', new CreateCategoryController().handle);
router.get('/category', new ListCategoryController().handle);

//--ROTAS PRODUCT--\\
router.post(
  '/product',
  upload.single('file'),
  new CreateProductController().handle,
);
router.get('/product', new ListByCategoryController().handle);

//--ROTAS ORDER--\\
router.post('/order', new CreateOrderController().handle);

export { router };
