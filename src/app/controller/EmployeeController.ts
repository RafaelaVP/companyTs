import { Request, Response } from 'express';

import { EmployeeService } from '../service/EmployeeService';

const employeeService = new EmployeeService();

export class EmployeeController {
  async create(request: Request, response: Response) {
    try {
      const result = await employeeService.create(request.body);
      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const result = await employeeService.findAll(request.query);
      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  async getById(request: Request, response: Response) {
    try {
      const result = await employeeService.findOne(request.params);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const payload = request.body;
      await employeeService.update(id, payload);
      return response.status(200).json(payload);
    } catch (err) {
      return response.status(400).json(err);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      await employeeService.delete(request.params.id);
      return response.status(204).json({});
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
