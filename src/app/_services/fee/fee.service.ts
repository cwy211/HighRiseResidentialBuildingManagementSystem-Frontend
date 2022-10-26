import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  PATH_OF_API = 'http://localhost:8080/fee';

  constructor(private httpClient:HttpClient) { }
  

  public getMaintenanceFeeToBePaid(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getMaintenanceFeeToBePaid');
  }

}
