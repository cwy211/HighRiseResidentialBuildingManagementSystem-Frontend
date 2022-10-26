import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  PATH_OF_API = 'http://localhost:8080/announcement';

  constructor(private httpClient: HttpClient) { }

  public getAllAnnouncement(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getAllAnnouncement');
  }

  public getActiveAnnouncement(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getActiveAnnouncement');
  }

  public createAnnouncement(newAnnouncement:any):Observable<any>{
    return this.httpClient.post<any>(this.PATH_OF_API+'/createAnnouncement',newAnnouncement);
  }

  public getAnnouncement(id:number): Observable<any>{
    const params = new HttpParams()
    .set('id', id);
    return this.httpClient.get<any>(this.PATH_OF_API + '/getAnnouncement',{params});
  }

  public updateAnnouncement(newAnnouncement:any):Observable<any>{
    return this.httpClient.put<any>(this.PATH_OF_API+'/updateAnnouncement',newAnnouncement);
  }
}
