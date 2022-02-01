import { Request, Response } from 'express';

import { ProductService } from '../service/ProductService';

const productService = new ProductService();

export class ProductController {
  async create(request: Request, response: Response) {
    try {
      const result = await productService.create(request.body);
      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const result = await productService.findAll(request.query);
      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }
}
