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
    field({
      id: "coordinates",
      type: field.types.OBJECT,
      subfields: [
        field({
          id: "lat",
          type: field.types.FLOAT,
        }),
        field({
          id: "lng",
          type: field.types.FLOAT,
        }),
      ],
    }),
    field({
      id: "locationValidation",
      type: field.types.FLOAT,
    }),
  ],
  relations: [
    ...shortcuts.relations.blameable(),
    relation({
      id: "doctor",
      to: "Doctors",
      representedBy: "fullName",
    }),
    relation({
      id: "rotation",
      to: "Rotations",
      representedBy: "dateIntervale",
      isRequired:false,
    }),
  ],
});
