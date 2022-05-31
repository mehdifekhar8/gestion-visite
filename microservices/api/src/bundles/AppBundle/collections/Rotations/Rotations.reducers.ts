import { IReducerOption } from "@bluelibs/nova";

// Export link names as constants with type of: IReducerOption, sample:
// export const myCustomLink: IReducerOption = { ... }

export const dateIntervale: IReducerOption = {
  dependency: { from: 1, to: 1 },
  async reduce(parent, { context }) {
    if (parent) {
      return `${
        parent.from.getFullYear() +
        "/" +
        (parseInt(parent.from.getMonth()) + 1).toString() +
        "/" +
        parent.from.getDate()
      } => ${
        parent.to.getFullYear() +
        "/" +
        (parseInt(parent.to.getMonth()) + 1).toString() +
        "/" +
        parent.to.getDate()
      }`;
    } else {
      return "Anonymous";
    }
  },
};
