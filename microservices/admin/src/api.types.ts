export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date Custom scalar type */
  Date: any;
  /** The `EJSON` scalar type represents EJSON values as specified by [Meteor EJSON](https://docs.meteor.com/api/ejson.html). */
  EJSON: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** ObjectId custom scalar type */
  ObjectId: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  country: Scalars['String'];
};

export type AddressInput = {
  city: Scalars['String'];
  country: Scalars['String'];
};

export type AppFile = {
  __typename?: 'AppFile';
  _id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  downloadUrl: Scalars['String'];
  size: Scalars['Int'];
  mimeType: Scalars['String'];
  thumbs: Array<Maybe<AppFileThumb>>;
  resourceType?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['String']>;
  uploadedById?: Maybe<Scalars['String']>;
  uploadedBy?: Maybe<User>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type AppFilethumbsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppFileGroup = {
  __typename?: 'AppFileGroup';
  _id: Scalars['ObjectId'];
  name?: Maybe<Scalars['String']>;
  files: Array<Maybe<AppFile>>;
  filesIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type AppFileThumb = {
  __typename?: 'AppFileThumb';
  /** @deprecated Use 'type' instead, due to cache mismatch with Apollo */
  id: Scalars['String'];
  type: Scalars['String'];
  path: Scalars['String'];
  downloadUrl: Scalars['String'];
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type Doctor = {
  __typename?: 'Doctor';
  _id?: Maybe<Scalars['ObjectId']>;
  coordinates: DoctorCoordinates;
  /** Represents the date when this object was created */
  createdAt: Scalars['Date'];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars['ObjectId']>;
  fullName: Scalars['String'];
  isEnabled: Scalars['Boolean'];
  phone: Scalars['String'];
  profile: DoctorProfile;
  region: Region;
  regionId: Scalars['ObjectId'];
  /** Represents the last time when the object was updated */
  updatedAt: Scalars['Date'];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars['ObjectId']>;
};

export type DoctorCoordinates = {
  __typename?: 'DoctorCoordinates';
  lat: Scalars['String'];
  lng: Scalars['String'];
};

export type DoctorCoordinatesInput = {
  lat: Scalars['String'];
  lng: Scalars['String'];
};

export type DoctorInsertInput = {
  coordinates: DoctorCoordinatesInput;
  fullName: Scalars['String'];
  isEnabled: Scalars['Boolean'];
  phone: Scalars['String'];
  profile: DoctorProfileInput;
  regionId: Scalars['ObjectId'];
};

export type DoctorProfile = {
  __typename?: 'DoctorProfile';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type DoctorProfileInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type DoctorUpdateInput = {
  coordinates?: Maybe<DoctorCoordinatesInput>;
  fullName?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  profile?: Maybe<DoctorProfileInput>;
  regionId?: Maybe<Scalars['ObjectId']>;
};

export type DocumentUpdateInput = {
  _id: Scalars['ObjectId'];
  modifier: Scalars['EJSON'];
};


export type ForgotPasswordInput = {
  email: Scalars['String'];
};



export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** This mutation is used to create a new token based on the existing one. Your previous token will no longer be usable. */
  reissueToken: Scalars['String'];
  DoctorsInsertOne?: Maybe<Doctor>;
  DoctorsUpdateOne: Doctor;
  DoctorsDeleteOne?: Maybe<Scalars['Boolean']>;
  RegionsInsertOne?: Maybe<Region>;
  RegionsUpdateOne: Region;
  RegionsDeleteOne?: Maybe<Scalars['Boolean']>;
  StatesInsertOne?: Maybe<State>;
  StatesUpdateOne: State;
  StatesDeleteOne?: Maybe<Scalars['Boolean']>;
  AppFileGroupsInsertOne?: Maybe<AppFileGroup>;
  AppFilesDeleteOne?: Maybe<Scalars['Boolean']>;
  AppFileGroupsDeleteOne?: Maybe<Scalars['Boolean']>;
  AppFileUploadToGroup?: Maybe<AppFile>;
  AppFileUpload?: Maybe<AppFile>;
  UsersInsertOne?: Maybe<User>;
  UserRegistration?: Maybe<Scalars['ObjectId']>;
  UsersUpdateOne: User;
  UsersDeleteOne?: Maybe<Scalars['Boolean']>;
  VisitsInsertOne?: Maybe<Visit>;
  VisitsUpdateOne: Visit;
  VisitsDeleteOne?: Maybe<Scalars['Boolean']>;
  register: RegistrationResponse;
  changePassword?: Maybe<Scalars['Boolean']>;
  login: LoginResponse;
  logout?: Maybe<Scalars['Boolean']>;
  resetPassword: ResetPasswordResponse;
  forgotPassword?: Maybe<Scalars['Boolean']>;
  verifyEmail: VerifyEmailResponse;
};


export type MutationreissueTokenArgs = {
  token: Scalars['String'];
};


export type MutationDoctorsInsertOneArgs = {
  document: DoctorInsertInput;
};


export type MutationDoctorsUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: DoctorUpdateInput;
};


export type MutationDoctorsDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationRegionsInsertOneArgs = {
  document: RegionInsertInput;
};


export type MutationRegionsUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: RegionUpdateInput;
};


export type MutationRegionsDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationStatesInsertOneArgs = {
  document: StateInsertInput;
};


export type MutationStatesUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: StateUpdateInput;
};


export type MutationStatesDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationAppFileGroupsInsertOneArgs = {
  document: Scalars['EJSON'];
};


export type MutationAppFilesDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationAppFileGroupsDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationAppFileUploadToGroupArgs = {
  groupId: Scalars['ObjectId'];
  upload: Scalars['Upload'];
  context?: Maybe<Scalars['String']>;
};


export type MutationAppFileUploadArgs = {
  upload: Scalars['Upload'];
  context?: Maybe<Scalars['String']>;
};


export type MutationUsersInsertOneArgs = {
  document: UserInsertInput;
};


export type MutationUserRegistrationArgs = {
  document: UserRegistrationInput;
};


export type MutationUsersUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: UserUpdateInput;
};


export type MutationUsersDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationVisitsInsertOneArgs = {
  document: VisitInsertInput;
};


export type MutationVisitsUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: VisitUpdateInput;
};


export type MutationVisitsDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationregisterArgs = {
  input: RegistrationInput;
};


export type MutationchangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationloginArgs = {
  input: LoginInput;
};


export type MutationresetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationforgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationverifyEmailArgs = {
  input: VerifyEmailInput;
};


export type Query = {
  __typename?: 'Query';
  DoctorsFindOne?: Maybe<Doctor>;
  DoctorsFind: Array<Maybe<Doctor>>;
  DoctorsCount: Scalars['Int'];
  RegionsFindOne?: Maybe<Region>;
  RegionsFind: Array<Maybe<Region>>;
  RegionsCount: Scalars['Int'];
  StatesFindOne?: Maybe<State>;
  StatesFind: Array<Maybe<State>>;
  StatesCount: Scalars['Int'];
  AppFilesFindOne?: Maybe<AppFile>;
  AppFilesFind?: Maybe<Array<Maybe<AppFile>>>;
  AppFileGroupsFindOne?: Maybe<AppFileGroup>;
  AppFileGroupsFind?: Maybe<Array<Maybe<AppFileGroup>>>;
  UsersFindOne?: Maybe<User>;
  UsersFind: Array<Maybe<User>>;
  UsersCount: Scalars['Int'];
  VisitsFindOne?: Maybe<Visit>;
  VisitsFind: Array<Maybe<Visit>>;
  VisitsCount: Scalars['Int'];
  me: User;
  framework?: Maybe<Scalars['String']>;
};


export type QueryDoctorsFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryDoctorsFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryDoctorsCountArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryRegionsFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryRegionsFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryRegionsCountArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryStatesFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryStatesFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryStatesCountArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryAppFilesFindOneArgs = {
  query: QueryInput;
};


export type QueryAppFilesFindArgs = {
  query: QueryInput;
};


export type QueryAppFileGroupsFindOneArgs = {
  query: QueryInput;
};


export type QueryAppFileGroupsFindArgs = {
  query: QueryInput;
};


export type QueryUsersFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryUsersFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryUsersCountArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryVisitsFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryVisitsFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryVisitsCountArgs = {
  query?: Maybe<QueryInput>;
};

export type QueryInput = {
  filters?: Maybe<Scalars['EJSON']>;
  options?: Maybe<QueryOptionsInput>;
};

export type QueryOptionsInput = {
  sort?: Maybe<Scalars['JSON']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  /** This is the Nova body that will get merged deeply with your request body. Useful for passing arguments. */
  sideBody?: Maybe<Scalars['EJSON']>;
};

export type Region = {
  __typename?: 'Region';
  _id?: Maybe<Scalars['ObjectId']>;
  /** Represents the date when this object was created */
  createdAt: Scalars['Date'];
  name: Scalars['String'];
  statesList: Array<Maybe<State>>;
  statesListIds: Array<Maybe<Scalars['ObjectId']>>;
  superVisor: User;
  superVisorId: Scalars['ObjectId'];
  /** Represents the last time when the object was updated */
  updatedAt: Scalars['Date'];
  usersList: Array<Maybe<User>>;
};

export type RegionInsertInput = {
  name: Scalars['String'];
  statesListIds: Array<Maybe<Scalars['ObjectId']>>;
  superVisorId: Scalars['ObjectId'];
};

export type RegionUpdateInput = {
  name?: Maybe<Scalars['String']>;
  statesListIds?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  superVisorId?: Maybe<Scalars['ObjectId']>;
};

export type RegistrationInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegistrationResponse = {
  __typename?: 'RegistrationResponse';
  /** Please not that if the user is required to validate his email for logging in, token will be null */
  token?: Maybe<Scalars['String']>;
};

export type ResetPasswordInput = {
  username: Scalars['String'];
  token: Scalars['String'];
  newPassword: Scalars['String'];
};

export type ResetPasswordResponse = {
  __typename?: 'ResetPasswordResponse';
  token: Scalars['String'];
};

export type State = {
  __typename?: 'State';
  _id?: Maybe<Scalars['ObjectId']>;
  state: Scalars['String'];
};

export type StateInsertInput = {
  state: Scalars['String'];
};

export type StateUpdateInput = {
  state?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  DoctorsSubscription?: Maybe<SubscriptionEvent>;
  DoctorsSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  RegionsSubscription?: Maybe<SubscriptionEvent>;
  RegionsSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  StatesSubscription?: Maybe<SubscriptionEvent>;
  StatesSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  UsersSubscription?: Maybe<SubscriptionEvent>;
  UsersSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  VisitsSubscription?: Maybe<SubscriptionEvent>;
  VisitsSubscriptionCount?: Maybe<SubscriptionCountEvent>;
};


export type SubscriptionDoctorsSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionDoctorsSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionRegionsSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionRegionsSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionStatesSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionStatesSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionUsersSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionUsersSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionVisitsSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionVisitsSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};

export type SubscriptionCountEvent = {
  __typename?: 'SubscriptionCountEvent';
  count?: Maybe<Scalars['Int']>;
};

export type SubscriptionEvent = {
  __typename?: 'SubscriptionEvent';
  event: SubscriptionEventType;
  document?: Maybe<Scalars['EJSON']>;
};

export enum SubscriptionEventType {
  added = 'added',
  changed = 'changed',
  removed = 'removed',
  ready = 'ready'
}


export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ObjectId']>;
  /** Represents the date when this object was created */
  createdAt: Scalars['Date'];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars['ObjectId']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  isEnabled: Scalars['Boolean'];
  profile: UserProfile;
  region?: Maybe<Region>;
  regionId?: Maybe<Scalars['ObjectId']>;
  roles: Array<Maybe<UserRole>>;
  /** Represents the last time when the object was updated */
  updatedAt: Scalars['Date'];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars['ObjectId']>;
};

export type UserInsertInput = {
  isEnabled: Scalars['Boolean'];
  profile: UserProfileInput;
  regionId?: Maybe<Scalars['ObjectId']>;
  roles: Array<Maybe<UserRole>>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserProfileInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserRegistrationInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  profile: UserProfileInput;
  roles: Array<Maybe<UserRole>>;
};

export enum UserRole {
  ADMIN = 'ADMIN',
  REGION_ADMINISTRATOR = 'REGION_ADMINISTRATOR',
  DELEGATE = 'DELEGATE'
}

export type UserUpdateInput = {
  isEnabled?: Maybe<Scalars['Boolean']>;
  profile?: Maybe<UserProfileInput>;
  regionId?: Maybe<Scalars['ObjectId']>;
  roles?: Maybe<Array<Maybe<UserRole>>>;
};

export type VerifyEmailInput = {
  username?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type VerifyEmailResponse = {
  __typename?: 'VerifyEmailResponse';
  token: Scalars['String'];
};

export type Visit = {
  __typename?: 'Visit';
  _id?: Maybe<Scalars['ObjectId']>;
  /** Represents the date when this object was created */
  createdAt: Scalars['Date'];
  doctor: Doctor;
  doctorId: Scalars['ObjectId'];
  information: Scalars['String'];
  /** Represents the last time when the object was updated */
  updatedAt: Scalars['Date'];
};

export type VisitInsertInput = {
  doctorId: Scalars['ObjectId'];
  information: Scalars['String'];
};

export type VisitUpdateInput = {
  doctorId?: Maybe<Scalars['ObjectId']>;
  information?: Maybe<Scalars['String']>;
};
