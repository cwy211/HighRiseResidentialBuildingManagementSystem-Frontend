import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  PATH_OF_API = 'http://localhost:8080/maintenance';

  constructor(private httpClient: HttpClient) { }

  public createFacilityMaintenance(newMaintenance:any):Observable<any>{
    return this.httpClient.post<any>(this.PATH_OF_API+'/createFacilityMaintenance',newMaintenance);
  }

  public createSingleFacilityMaintenance(newMaintenance:any):Observable<any>{
    return this.httpClient.post<any>(this.PATH_OF_API+'/createSingleFacilityMaintenance',newMaintenance);
  }

  public getFacilityMaintenanceByDate(date:any): Observable<any>{
    const params = new HttpParams()
    .set('date', date);
    return this.httpClient.get<any>(this.PATH_OF_API + '/getFacilityMaintenanceByDate',{params});
  }

  public getFacilityMaintenanceById(id:number): Observable<any>{
    const params = new HttpParams()
    .set('id', id);
    return this.httpClient.get<any>(this.PATH_OF_API + '/getFacilityMaintenanceById',{params});
  }

  public saveFacilityMaintenance(updatedMaintenance:any):Observable<any>{
    return this.httpClient.post<any>(this.PATH_OF_API+'/saveFacilityMaintenance',updatedMaintenance);
  }

  public getMaintenanceHistoryByFacility(facilityId:number): Observable<any>{
    const params = new HttpParams()
    .set('facilityId', facilityId);
    return this.httpClient.get<any>(this.PATH_OF_API + '/getMaintenanceHistoryByFacility',{params});
  }

  public addMaintenanceFundUsage(newUsage:any):Observable<any>{
    return this.httpClient.post<any>(this.PATH_OF_API+'/addMaintenanceFundUsage',newUsage);
  }

  public getMaintenanceFundUsageByYearMonth(date:string): Observable<any>{
    const params = new HttpParams()
    .set('yearMonth', date);
    return this.httpClient.get<any>(this.PATH_OF_API + '/getMaintenanceFundUsageByYearMonth',{params});
  }

  public getMaintenanceFundUsageById(id:string): Observable<any>{
    const params = new HttpParams()
    .set('id', id);
    return this.httpClient.get<any>(this.PATH_OF_API + '/getMaintenanceFundUsageById',{params});
  }

  public deleteMaintenanceFundUsage(id:string): Observable<any>{
    const params = new HttpParams()
    .set('id', id);
    return this.httpClient.delete<any>(this.PATH_OF_API + '/deleteMaintenanceFundUsage',{params});
  }
}
