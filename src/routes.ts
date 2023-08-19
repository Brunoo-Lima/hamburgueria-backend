import { Request, Response, Router } from 'express';
import multer from 'multer';

import { isAuthenticated } from './middlewares/isAuthenticated';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';

import uploadConfig from './config/multer';
import { AddItemsOrderController } from './controllers/order/AddItemsOrderController';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

//--ROTAS USER--\\
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

//--ROTAS CATEGORY--\\
router.post(
  '/category',
  isAuthenticated,
  new CreateCategoryController().handle,
);
router.get('/category', isAuthenticated, new ListCategoryController().handle);

//--ROTAS PRODUCT--\\
router.post(
  '/product',
  isAuthenticated,
  upload.single('file'),
  new CreateProductController().handle,
);
router.get('/product', isAuthenticated, new ListByCategoryController().handle);

//--ROTAS ORDER--\\
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);
router.post(
  '/order/item',
  isAuthenticated,
  new AddItemsOrderController().handle,
);

export { router };
