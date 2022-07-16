import { EntitySchema } from "typeorm";

export const BaseSchema = new EntitySchema({
  name: "BaseSchema",
  columns: {
    created: {
      type: 'timestamp with time zone',
      createDate: true
    },
    updated: {
      type: 'timestamp with time zone',
      updateDate: true
    },
    deleted: {
      type: 'timestamp with time zone',
      deleteDate: true
    },
  },
});
