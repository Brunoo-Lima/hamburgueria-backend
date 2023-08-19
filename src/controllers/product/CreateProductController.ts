import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/CreateProductService';

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;

    if (!req.file) {
      throw new Error('Upload falhado');
    } else {
      const { originalname, filename: banner } = req.file;

      const createProductService = new CreateProductService();
      const createProduct = await createProductService.execute({
        name,
        price,
        description,
        banner,
        category_id,
      });

      return res.json(createProduct);
    }
  }
}

export { CreateProductController };
