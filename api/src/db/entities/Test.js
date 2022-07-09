var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  schema: "nuxtTypeorm",
  name: "Test",
  tableName: "test",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
  },
});
