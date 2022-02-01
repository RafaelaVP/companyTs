import { Router } from 'express';
import { EmployeeController } from '../app/controller/EmployeeController';

const employeeRouter = Router();

employeeRouter.post('/api/v1/employee', new EmployeeController().create);
employeeRouter.get('/api/v1/employee', new EmployeeController().findAll);
employeeRouter.get('/api/v1/employee/:id', new EmployeeController().getById);
employeeRouter.put('/api/v1/employee/:id', new EmployeeController().update);
employeeRouter.delete('/api/v1/employee/:id', new EmployeeController().delete);

export { employeeRouter };
