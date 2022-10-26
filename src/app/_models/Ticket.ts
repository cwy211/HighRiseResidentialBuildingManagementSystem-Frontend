import { Admin } from "./Admin";
import { User } from "./User";

export class Ticket{
    id!:string;
    title!:string;
    ticketDescription!:string;
    ticketUser!:User;
    ticketStatus!:string;
    ticketResponse!:string;
    ticketAdmin!:Admin;
    ticketDate!:Date;
}