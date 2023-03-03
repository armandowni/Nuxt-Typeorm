import { EntitySchema } from "typeorm";
import { BaseSchema } from "../interface/tracked";

export const Test = new EntitySchema({
  schema: "nuxtTypeorm",
  name: "Test",
  tableName: "Test",
  extends: "BaseSchema",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
    age: {
      type: "int",
    },
    status: {
      type: "int",
      nullable: true,
    },
    // status 1 = from nuxt 2, status 2 = from nuxt 3
    ...BaseSchema,
  },
});
