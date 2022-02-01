import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProducts1643738397108 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
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
            name: 'category',
            type: 'varchar'
          },
          {
            name: 'employee_id',
            type: 'int'
          },
          {
            name: 'price',
            type: 'integer'
          }
        ],
        foreignKeys: [
          {
            name: 'fk_products_name',
            columnNames: ['employee_id'],
            referencedTableName: 'employees',
            referencedColumnNames: ['id']
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
