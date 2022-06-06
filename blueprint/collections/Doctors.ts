import { collection, field, relation, shortcuts } from "../utils";

export const Doctors = collection({
  id: "Doctors",
  representedBy: "fullName",
  behaviors: {
    softdeletable: true,
  },
  mock: {
    count: 10,
  },
  fields: [
    ...shortcuts.fields.user.standard(),
    shortcuts.field.softdeletable(),
    ...shortcuts.fields.timestampable(),
    field({
      id: "fullName",
      type: field.types.STRING,
      isReducer: true,
    }),
    field({
      id: "phone",
      type: field.types.STRING,
      isReducer:false
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
      id: "address",
      type: field.types.OBJECT,
      isRequired:false,
      subfields: [
        field({
          id: "wilaya",
          type: field.types.STRING,
          isRequired:false
        }),
        field({
          id: "daira",
          type: field.types.STRING,
          isRequired:false
        }),
        field({
          id: "commune",
          type: field.types.STRING,
          isRequired:false
        }),
     
      ],
    }),
  ],
  relations: [
    ...shortcuts.relations.blameable(),
    relation({
      id: "region",
      to: "Regions",
      representedBy: "name",
      isRequired: false,
    }),
  ],
});
