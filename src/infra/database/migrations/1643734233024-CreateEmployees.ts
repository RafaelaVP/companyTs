import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEmployees1643734233024 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'employees',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'cpf',
            type: 'varchar'
          },
          {
            name: 'office',
            type: 'varchar'
          },
          {
            name: 'situation',
            type: 'varchar'
          },
          {
            name: 'birthday',
            type: 'varchar'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('employees');
  }
}
