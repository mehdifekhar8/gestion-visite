export default {
  resolvers: {
    User: {},
    UserProfile: {},
    UserRole: {
      ADMIN: "ADMIN",
      REGION_ADMINISTRATOR: "REGION_ADMINISTRATOR",
      DELEGATE: "DELEGATE",
    },
  },
};
