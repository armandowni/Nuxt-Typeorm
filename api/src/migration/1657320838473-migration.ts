import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1657320838473 implements MigrationInterface {
    name = 'migration1657320838473'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nuxtTypeorm"."test" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "nuxtTypeorm"."user" ("created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "deleted" TIMESTAMP, "id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "nuxtTypeorm"."user"`);
        await queryRunner.query(`DROP TABLE "nuxtTypeorm"."test"`);
    }

}
