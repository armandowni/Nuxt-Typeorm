import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1657667271501 implements MigrationInterface {
    name = 'migration1657667271501'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" DROP COLUMN "deleted"`);
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" ADD "deleted" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
