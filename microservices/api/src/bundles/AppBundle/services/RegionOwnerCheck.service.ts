import { Service, ContainerInstance } from "@bluelibs/core";
import { RegionsCollection } from "../collections/Regions";
import { UserRole, UsersCollection } from "../collections/Users";
import { RegionInsertInput } from "./inputs";

@Service()
export class RegionOwnerCheck {
  constructor(protected readonly container: ContainerInstance) {}

  async  checkIfSuperVisor(args,ctx) {
    const { container } = ctx;
    const usersCollection = container.get(UsersCollection);
    const currentUser = await usersCollection.findOne({
      _id: ctx.userId,
    });
    if (!currentUser.roles.includes(UserRole.ADMIN))
      args.query = {
        filters: { superVisorId: ctx.userId },
      };
    return args.query;
  }
}
