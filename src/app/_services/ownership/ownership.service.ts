import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnershipService {

  PATH_OF_API = 'http://localhost:8080/ownership';

  constructor(private httpClient: HttpClient) { }

  public addOwnership(newOwnership:any):Observable<any>{
    return this.httpClient.post<any>(this.PATH_OF_API+'/addOwnership',newOwnership);
  }

  public getAllOwnership(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getAllOwnership');
  }
}
