import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1657667624468 implements MigrationInterface {
    name = 'migration1657667624468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" ADD "age" bigint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nuxtTypeorm"."test" DROP COLUMN "age"`);
    }

}
