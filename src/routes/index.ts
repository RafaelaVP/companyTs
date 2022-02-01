import { Router } from 'express';
import { employeeRouter } from './employeeRoute';
import { productRouter } from './productRoute';

const routes = Router();

routes.use(employeeRouter);

routes.use(productRouter);

export { routes };
