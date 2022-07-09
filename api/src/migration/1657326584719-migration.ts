import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1657326584719 implements MigrationInterface {
    name = 'migration1657326584719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" RENAME COLUMN "title" TO "name"`);
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" ALTER COLUMN "name" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" RENAME COLUMN "name" TO "title"`);
    }

}
