import { Service, ContainerInstance } from "@bluelibs/core";
import { DoctorsCollection } from "../collections";
import { RegionsCollection } from "../collections/Regions";
import { UserRole, UsersCollection } from "../collections/Users";
import { RegionInsertInput } from "./inputs";
import * as X from "@bluelibs/x-bundle";
import { UserDisabledEvent } from "@bluelibs/security-bundle";

@Service()
export class CreateDoctorService {
  constructor(protected readonly container: ContainerInstance) {}

  async createNewDoctor(args, ctx) {
    const { container } = ctx;
    const usersCollection = container.get(UsersCollection);
    const doctorsCollection = container.get(DoctorsCollection);

    const currentUser = await usersCollection.findOne({
      _id: ctx.userId,
    });
    if (
      !(
        currentUser.roles.includes(UserRole.ADMIN) ||
        currentUser.roles.includes(UserRole.REGION_ADMINISTRATOR)
      )
    ) {
      console.log(currentUser);
      args.document.regionId = currentUser.regionId;
    }
    return await doctorsCollection.insertOne(args.document, {
      context: {
        userId: ctx.userId,
      },
    });
  }
}
