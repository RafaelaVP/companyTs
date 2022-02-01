import { Router } from 'express';
import { ProductController } from '../app/controller/ProductController';

const productRouter = Router();

productRouter.post('/api/v1/product', new ProductController().create);
productRouter.get('/api/v1/product', new ProductController().findAll);

export { productRouter };
