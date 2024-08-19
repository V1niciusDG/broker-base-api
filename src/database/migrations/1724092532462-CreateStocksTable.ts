import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStocksTable1724092532462 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "stocks" (
                "id" SERIAL NOT NULL,
                "symbol" character varying NOT NULL,
                "name" character varying NOT NULL,
                "price" numeric(10,2) NOT NULL,
                "quantity" integer NOT NULL,
                "user_id" integer NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_b5b1ee4ac914767229337974575" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "stocks"`);
  }
}
