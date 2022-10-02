import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeFinishedAtColumnToNullable1664685402676 implements MigrationInterface {
    name = 'ChangeFinishedAtColumnToNullable1664685402676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo"."task" ALTER COLUMN "finished_at" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo"."task" ALTER COLUMN "finished_at" SET NOT NULL`);
    }

}
