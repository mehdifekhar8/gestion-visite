import { collection, field, relation, shortcuts } from "../utils";

export const Rotations = collection({
  id: "Rotations",
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
      id: "from",
      type: field.types.DATE,
    }),
    field({
      id: "to",
      type: field.types.DATE,
    }),

    field({
      id: "roles",
      type: field.types.ENUM,
      enumValues: ["EACH_DAY", "GLOBAL"],
      isArray: true,
    }),
    field({
      id: "isDone",
      type: field.types.BOOLEAN,
      defaultValue: false,
    }),
  ],
  relations: [
    ...shortcuts.relations.blameable(),
    relation({
      id: "user",
      to: "Users",
      representedBy: "fullName",
    }),
    relation({
      id: "doctorsList",
      to: "Doctors",
      representedBy: "fullName",
      isMany:true
    }),
  ],
});
