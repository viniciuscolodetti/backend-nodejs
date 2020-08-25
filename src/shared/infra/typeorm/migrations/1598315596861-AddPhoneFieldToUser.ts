import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddPhoneFieldToUser1598315596861
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [
      new TableColumn({
        name: 'phone',
        type: 'varchar',
      }),
      new TableColumn({
        name: 'whatsapp',
        type: 'varchar',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'phone');
    await queryRunner.dropColumn('users', 'whatsapp');
  }
}
