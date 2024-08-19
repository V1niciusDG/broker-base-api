import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFkInUserStocks1724092681811 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "stocks"
      ADD CONSTRAINT "FK_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "stocks" DROP CONSTRAINT "FK_user_id"
    `);
  }
}
