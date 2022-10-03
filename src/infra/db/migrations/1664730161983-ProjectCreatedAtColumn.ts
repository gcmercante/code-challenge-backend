import { MigrationInterface, QueryRunner } from "typeorm";

export class ProjectCreatedAtColumn1664730161983 implements MigrationInterface {
    name = 'ProjectCreatedAtColumn1664730161983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo"."project" ADD "created_at" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo"."project" DROP COLUMN "created_at"`);
    }

}
