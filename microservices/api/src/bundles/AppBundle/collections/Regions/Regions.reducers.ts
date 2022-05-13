import { IReducerOption } from "@bluelibs/nova";

// Export link names as constants with type of: IReducerOption, sample:
// export const myCustomLink: IReducerOption = { ... }

export const state: IReducerOption = {
  dependency: {},
  async reduce(parent, { context }) {
    // You can access the container via: context.container
    return "Not Implemented";
  },
};
