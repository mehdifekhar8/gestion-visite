import { collection, field, relation, shortcuts } from "../utils";

export const Visits = collection({
  id: "Visits",
  behaviors: {
    softdeletable: true,
  },
  mock: {
    count: 10,
  },
  fields: [
    shortcuts.field.softdeletable(),
    ...shortcuts.fields.timestampable(),
    field({
      id: "information",
      type: field.types.STRING,
    }),
    field({
      id: "information2",
      type: field.types.STRING,
    }),
  ],
  relations: [
    relation({
      id: "doctor",
      to: "Doctors",
      representedBy: "fullName",
    }),
  ],
});
