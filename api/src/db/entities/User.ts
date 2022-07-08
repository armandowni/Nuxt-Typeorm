import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TrackedEntity } from "../interface/tracked";

@Entity("user", { schema: "nuxtTypeorm" })
export class User extends TrackedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
