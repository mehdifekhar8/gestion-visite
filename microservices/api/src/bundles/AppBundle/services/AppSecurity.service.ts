import { Service, ContainerInstance } from "@bluelibs/core";
import { ObjectId } from "@bluelibs/ejson";
import { UsernameAlreadyExistsException } from "@bluelibs/password-bundle";
import { UserRole, UsersCollection } from "../collections/Users";

@Service()
export class AppSecurityService {
  constructor(protected readonly container: ContainerInstance) {}

  async checkEmailIsUniqueAndNotOwn(email: string, userId: ObjectId) {
    const usersCollection = this.container.get(UsersCollection);

    const users = await usersCollection
      .find({
        "password.email": email,
        _id: {
          $ne: userId,
        },
      })
      .toArray();

    for (const user of users) {
      if (user.password.email === email)
        throw new UsernameAlreadyExistsException({ username: email });
    }
  }
  async checkPermission(createdRole: UserRole[], userId: ObjectId) {
    const usersCollection = this.container.get(UsersCollection);
    const currentUser = await usersCollection.findOne({
      _id: userId,
    });
    if (currentUser.roles.includes(UserRole.ADMIN)) return true;
    if (
      createdRole.includes(UserRole.REGION_ADMINISTRATOR) ||
      createdRole.includes(UserRole.ADMIN)
    ) {
      throw new Error("REGION_ADMINISTRATOR could only create Delegate");
    }
  }

  
}
