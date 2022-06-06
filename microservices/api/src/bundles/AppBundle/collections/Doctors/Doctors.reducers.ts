import { IReducerOption } from "@bluelibs/nova";

// Export link names as constants with type of: IReducerOption, sample:
// export const myCustomLink: IReducerOption = { ... }

export const fullName: IReducerOption = {
  dependency: {
    profile: {
      firstName: 1,
      lastName: 1,
    },
  },
  reduce(user) {
    const { profile } = user;
    if (profile) {
      return `${profile.firstName} ${profile.lastName}`;
    } else {
      return "Anonymous";
    }
  },
};
