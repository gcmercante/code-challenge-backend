import { MigrationInterface, QueryRunner } from "typeorm";

export class TaskDeleteCascade1664748552318 implements MigrationInterface {
    name = 'TaskDeleteCascade1664748552318'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo"."task" DROP CONSTRAINT "FK_1f53e7ffe94530f9e0221224d29"`);
        await queryRunner.query(`ALTER TABLE "todo"."task" ADD CONSTRAINT "FK_1f53e7ffe94530f9e0221224d29" FOREIGN KEY ("project_id") REFERENCES "todo"."project"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo"."task" DROP CONSTRAINT "FK_1f53e7ffe94530f9e0221224d29"`);
        await queryRunner.query(`ALTER TABLE "todo"."task" ADD CONSTRAINT "FK_1f53e7ffe94530f9e0221224d29" FOREIGN KEY ("project_id") REFERENCES "todo"."project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
