import { Admin } from "./Admin";

export class Announcement {
    id!:string;
    title!:string;
    description!:string;
    createDate!:Date;
    status!:string;
    user!:Admin;
  }