import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1657321860053 implements MigrationInterface {
    name = 'migration1657321860053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" ALTER COLUMN "title" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" ALTER COLUMN "title" SET NOT NULL`);
    }

}
