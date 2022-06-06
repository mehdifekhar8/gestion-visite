import { Service, ContainerInstance } from "@bluelibs/core";
import { DoctorsCollection, VisitsCollection } from "../collections";
import { RegionsCollection } from "../collections/Regions";
import { UserRole, UsersCollection } from "../collections/Users";
import { RegionInsertInput } from "./inputs";
import * as X from "@bluelibs/x-bundle";
import { UserDisabledEvent } from "@bluelibs/security-bundle";

@Service()
export class CreateVisitService {
  constructor(protected readonly container: ContainerInstance) {}

  async createNewVisit(args, ctx) {
    const { container } = ctx;
    const visitsCollection = container.get(VisitsCollection);
    const doctorsCollection = container.get(DoctorsCollection);

    const currentDoctor = await doctorsCollection.findOne({
      _id: args.document.doctorId,
    });
   console.log(args)
    const distance = this.getDistanceFromLatLonInKm(
      args.document.coordinates.lat,
      args.document.coordinates.lng,
      currentDoctor.coordinates.lat,
      currentDoctor.coordinates.lng
    );
    console.log(distance);
    args.document.locationValidation = distance
    return await visitsCollection.insertOne(args.document, {
      context: {
        userId: ctx.userId,
      },
    });
  }
  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return (d * 1000).toFixed(2);
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
}
