import { Employee } from '../entities/Employee';
import { EmployeeRepository } from '../repository/EmployeeRepository';

const employeeRepository = new EmployeeRepository();

export class EmployeeService {
  async create(payload): Promise<Employee | Error> {
    const result = await employeeRepository.create(payload);
    return result;
  }

  async findAll(payload) {
    const result = await employeeRepository.findAll(payload);
    return result;
  }

  async findOne(_id): Promise<Employee | Error> {
    const employee = await employeeRepository.findOne(_id);
    return employee;
  }

  async update(_id, payload) {
    return employeeRepository.update(_id, payload);
  }

  async delete(_id) {
    await this.findOne(_id);
    return employeeRepository.delete(_id);
  }
}
