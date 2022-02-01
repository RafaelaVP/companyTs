import { Employee } from '../entities/Employee';
import { BaseRepository } from './BaseRepository';

export class EmployeeRepository extends BaseRepository {
  constructor() {
    super(Employee);
  }
}
