import { EntitySchema } from "typeorm";

export const Test = new EntitySchema({
  schema: "nuxtTypeorm",
  name: "Test",
  tableName: "test",
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
      type: "int8",
    },
  },
});
