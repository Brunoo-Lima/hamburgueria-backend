import { Request, Response, Router } from 'express';

const router = Router();

router.get('/test', (req: Request, res: Response) => {
  // return res.json({ ok: true });
  throw new Error('Algo deu Errado!');
});

export { router };
