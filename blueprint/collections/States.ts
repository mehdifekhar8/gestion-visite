import { collection, field, relation, shortcuts } from "../utils";

export const States = collection({
  id: "States",
  behaviors: {
    softdeletable: true,
  },
  mock: {
    count: 10,
  },
  fields: [
    shortcuts.field.softdeletable(),
    field({
      id: "state",
      type: field.types.STRING,
    }),
  ],
});
