import { IReducerOption } from "@bluelibs/nova";

// Export link names as constants with type of: IReducerOption, sample:
// export const myCustomLink: IReducerOption = { ... }

export const phone: IReducerOption = {
  dependency: {},
  async reduce(parent, { context }) {
    // You can access the container via: context.container
    return "Not Implemented";
  },
};

export const fullName: IReducerOption = {
  dependency: {},
  async reduce(parent, { context }) {
    // You can access the container via: context.container
    return "Not Implemented";
  },
};
