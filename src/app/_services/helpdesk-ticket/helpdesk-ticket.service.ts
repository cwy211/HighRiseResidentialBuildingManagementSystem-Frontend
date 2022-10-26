import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpdeskTicketService {

  PATH_OF_API = 'http://localhost:8080/helpdeskTicket';

  constructor(private httpClient:HttpClient) { }

  public createHelpdeskTicket(newTicket:any):Observable<any>{
    return this.httpClient.post<any>(this.PATH_OF_API+'/createHelpdeskTicket',newTicket);
  }

  public getAllHelpdeskTicket(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getAllHelpdeskTicket');
  }

  public getHelpdeskTicketByUser(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getHelpdeskTicketByUser');
  }

  public getHelpdeskTicketById(id:number): Observable<any>{
    const params = new HttpParams()
    .set('id', id);
    return this.httpClient.get<any>(this.PATH_OF_API + '/getHelpdeskTicketById',{params});
  }

  public handleHelpdeskTicket(updatedTicket:any):Observable<any>{
    return this.httpClient.put<any>(this.PATH_OF_API+'/handleHelpdeskTicket',updatedTicket);
  }

  public processHelpdeskTicket(updatedTicket:any):Observable<any>{
    return this.httpClient.put<any>(this.PATH_OF_API+'/processHelpdeskTicket',updatedTicket);
  }
}
