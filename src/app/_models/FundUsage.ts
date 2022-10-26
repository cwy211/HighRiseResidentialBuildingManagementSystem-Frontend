import { Admin } from "./Admin";

export class FundUsage {
    id!:string;
    title!:string;
    description!:string;
    price!:number;
    paymentDate!:Date;
    usageMonthYear!:string;
    uploadDateTime!:Date;
    uploader!:Admin;
  }