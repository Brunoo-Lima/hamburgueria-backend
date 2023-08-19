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
import { AddItemsOrderController } from './controllers/order/AddItemsOrderController';
import { RemoveItemOrderController } from './controllers/order/RemoveItemOrderController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';

import uploadConfig from './config/multer';
import { FinishOrderController } from './controllers/order/FinishOrderController';

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
  '/order/add',
  isAuthenticated,
  new AddItemsOrderController().handle,
);
router.delete(
  '/order/remove',
  isAuthenticated,
  new RemoveItemOrderController().handle,
);
router.put('/order/send', isAuthenticated, new SendOrderController().handle);
router.get('/orders', isAuthenticated, new ListOrderController().handle);
router.put(
  '/order/finish',
  isAuthenticated,
  new FinishOrderController().handle,
);

export { router };
