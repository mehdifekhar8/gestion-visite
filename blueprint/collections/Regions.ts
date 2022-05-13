import { collection, field, relation, shortcuts } from "../utils";

export const Regions = collection({
  id: "Regions",
  representedBy: "name",
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
      id: "name",
      type: field.types.STRING,
    }),
  ],
  relations: [
    relation({
      id: "superVisor",
      to: "Users",
      representedBy: "fullName",
    }),
    relation({
      id: "statesList",
      to: "States",
      representedBy: "state",
      isMany:true,
    }),
  ],
});
