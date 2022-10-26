import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  PATH_OF_API = 'http://localhost:8080/facility';

  constructor(private httpClient: HttpClient) { }

  public getAllFacility(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getAllFacility');
  }

  public getFacilityById(facilityId:string): Observable<any>{
    const params = new HttpParams()
    .set('facilityId', facilityId);
    return this.httpClient.get<any>(this.PATH_OF_API + '/getFacilityById',{params});
  }

  public editFacility(updatedFacility:any):Observable<any>{
    return this.httpClient.put<any>(this.PATH_OF_API+'/editFacility',updatedFacility);
  }

  public getAllBookingFacility(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getAllBookingFacility');
  }

  public addFacility(newFacility:any):Observable<any>{
    return this.httpClient.post<any>(this.PATH_OF_API+'/addFacility',newFacility);
  }

  public getFacilityBookingByFacilityDate(searchParams:any): Observable<any>{
    const params = new HttpParams()
    .set('facilityId', searchParams.facilityId)
    .set('fbDate', searchParams.date);
    return this.httpClient.get<any>(this.PATH_OF_API + '/getFacilityBookingByFacilityDate',{params});
  }

  public makeFacilityBooking(newBooking:any):Observable<any>{
    return this.httpClient.post<any>(this.PATH_OF_API+'/makeFacilityBooking',newBooking);
  }

  public getFacilityBookingByUser(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getFacilityBookingByUser');
  }

  public deleteFacilityBooking(bookingId:number): Observable<any>{
    const params = new HttpParams()
    .set('bookingId', bookingId);
    return this.httpClient.delete<any>(this.PATH_OF_API + '/deleteFacilityBooking',{params});
  }
}
