import { Service, ContainerInstance } from "@bluelibs/core";
import { RegionsCollection } from "../collections/Regions";
import { UserRole, UsersCollection } from "../collections/Users";
import { RegionInsertInput } from "./inputs";

@Service()
export class RegionInsertService {
  constructor(protected readonly container: ContainerInstance) {}

  async ToCheckRoleAndInsert(document: RegionInsertInput, ctx: any) {
    const { container } = ctx;
    const collection = container.get(RegionsCollection);
    const userCollection = container.get(UsersCollection);
    const currentUser = await userCollection.findOne({
      _id: ctx.userId,
    });
    if (!currentUser.roles.includes(UserRole.ADMIN))
      document.superVisorId = ctx.userId;

    const result = await collection.insertOne(document);
    return result.insertedId;
  }
}
