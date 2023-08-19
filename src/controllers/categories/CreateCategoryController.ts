import { Request, Response } from 'express';
import { CreateCategoryService } from '../../services/categories/CreateCategoryService';

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createCategoryService = new CreateCategoryService();
    const createCategory = await createCategoryService.execute({
      name,
    });

    return res.json(createCategory);
  }
}

export { CreateCategoryController };
