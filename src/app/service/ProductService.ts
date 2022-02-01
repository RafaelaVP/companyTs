import { Employee } from '../entities/Employee';
import { ProductRepository } from '../repository/ProductRepository';

const productRepository = new ProductRepository();

export class ProductService {
  async create(payload): Promise<Employee | Error> {
    const result = await productRepository.create(payload);
    return result;
  }

  async findAll(payload) {
    const result = await productRepository.findAll(payload);
    return result;
  }
}
