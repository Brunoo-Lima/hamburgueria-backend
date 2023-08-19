import { Request, Response } from 'express';
import { AddItemsOrderService } from '../../services/order/AddItemsOrderService';

class AddItemsOrderController {
  async handle(req: Request, res: Response) {
    const { amount, order_id, product_id } = req.body;

    const addItemsService = new AddItemsOrderService();
    const addItems = await addItemsService.execute({
      amount,
      order_id,
      product_id,
    });

    return res.json(addItems);
  }
}

export { AddItemsOrderController };
