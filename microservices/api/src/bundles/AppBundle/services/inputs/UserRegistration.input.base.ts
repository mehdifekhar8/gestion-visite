/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { UserRole } from "@bundles/AppBundle/collections/Users";

@Schema()
export class UserProfileInput {
  @Is(a.string().required())
  firstName: string;

  @Is(a.string().required())
  lastName: string;
}

@Schema()
export class UserRegistrationInput {

  @Is(() => Schema.from(UserProfileInput))
  profile: UserProfileInput;
 
  @Is(a.string().email())
  email?: string;

  @Is(a.string().nullable())
  password?: string;

  @Is(
    an
      .array()
      .of(a.string().oneOf(Object.values(UserRole).concat(null)))
      .required()
  )
  roles: UserRole[] = [];
}
