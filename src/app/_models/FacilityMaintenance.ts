import { Time } from "@angular/common";
import { Admin } from "./Admin";
import { Facility } from "./Facility";

export class FacilityMaintenance {
    id!:string;
    fmDate!:Date;
    fmTime!:Time;
    fmFacility!:Facility;
    type!:string;
    description!:string;
    status!:string;
    adminIncharged!:Admin;
  }