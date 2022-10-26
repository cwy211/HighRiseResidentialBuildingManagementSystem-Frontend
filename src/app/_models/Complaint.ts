import { Admin } from "./Admin";
import { ComplaintCategory } from "./ComplaintCategory";
import { User } from "./User";

export class Complaint {
    id!:string;
    complaintTitle!:string;
    complaintDescription!:string;
    complaintUser!:User;
    sentimentValue!:string;
    complaintCategory!:ComplaintCategory;
    complaintStatus!:string;
    complaintResponse!:string;
    complaintAdmin!:Admin;
    createdDateTime!:Date;
  }