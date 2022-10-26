import { Unit } from "./Unit";
import { User } from "./User";

export class Ownership {
    id!:string;
    owner!:User;
    ownedUnit!:Unit;
    startDate!:Date;
  }