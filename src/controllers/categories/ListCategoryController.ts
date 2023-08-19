import { Request, Response } from 'express';
import { ListCategoryService } from '../../services/categories/ListCategoryService';

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const listCategoryService = new ListCategoryService();
    const listCategory = await listCategoryService.execute();

    return res.json(listCategory);
  }
}

export { ListCategoryController };
