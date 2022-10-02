import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDateColumnsAndChangeColumnNames1664675028292 implements MigrationInterface {
    name = 'AddDateColumnsAndChangeColumnNames1664675028292'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo"."project" RENAME COLUMN "name" TO "title"`);
        await queryRunner.query(`ALTER TABLE "todo"."task" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "todo"."task" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo"."task" ADD "created_at" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo"."task" ADD "finished_at" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo"."task" DROP COLUMN "finished_at"`);
        await queryRunner.query(`ALTER TABLE "todo"."task" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "todo"."task" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "todo"."task" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo"."project" RENAME COLUMN "title" TO "name"`);
    }

}
