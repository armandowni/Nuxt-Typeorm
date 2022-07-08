import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("test", { schema: "nuxtTypeorm" })
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title: string;
}
