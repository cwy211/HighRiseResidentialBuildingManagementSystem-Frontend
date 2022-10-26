import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from 'src/app/_models/Unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  PATH_OF_API = 'http://localhost:8080/unit';


  constructor(private httpClient: HttpClient) { }

  public getAllUnitId(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getAllUnitId');
  }

  public getAllOwnedUnitId(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getAllOwnedUnitId');
  }

  public getAllVacantUnitId(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getAllVacantUnitId');
  }

  public registerUnit(newUnit:any):Observable<any>{
    return this.httpClient.post<any>(this.PATH_OF_API+'/registerUnit',newUnit);
  }

  public updateUnit(newUnit:Unit):Observable<any>{
    return this.httpClient.put<any>(this.PATH_OF_API+'/updateUnit',newUnit);
  }

  public getAllUnit(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getAllUnit');
  }

  public getUnitByUnitId(unitNo:string): Observable<any>{
    const params = new HttpParams()
    .set('unitNo', unitNo);
    return this.httpClient.get<any>(this.PATH_OF_API + '/getUnitByUnitId',{params});
  }

  public searchUnitByUnitId(unitNo:string): Observable<any>{
    const params = new HttpParams()
    .set('unitNo', unitNo);
    return this.httpClient.get<any>(this.PATH_OF_API + '/searchUnitByUnitId',{params});
  }

  public checkUnitExist(unitNo:string): Observable<any>{
    const params = new HttpParams()
    .set('unitNo', unitNo);
    return this.httpClient.get<any>(this.PATH_OF_API + '/checkUnitExist',{params});
  }
}
