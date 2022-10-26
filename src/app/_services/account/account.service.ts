import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  PATH_OF_API = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public registerNewUserDetails(newUser:any):Observable<any>{
    return this.httpClient.post<any>(this.PATH_OF_API+'/registerNewUserDetails',newUser);
  }

  public registerNewOwnerDetails(newUser:any):Observable<any>{
    return this.httpClient.post<any>(this.PATH_OF_API+'/registerNewOwnerDetails',newUser);
  }

  public getOnlyUserDetails(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getOnlyUserDetails');
  }

  public getNotInactiveUserDetails(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getNotInactiveUserDetails');
  }

  public getUserByUserId(userId:string): Observable<any>{
    const params = new HttpParams()
    .set('userId', userId);
    return this.httpClient.get<any>(this.PATH_OF_API + '/getUserByUserId',{params});
  }

  public getOwnUserProfile(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getOwnUserProfile');
  }

  public getOwnAdminProfile(): Observable<any>{
    return this.httpClient.get<any>(this.PATH_OF_API + '/getOwnAdminProfile');
  }

  

  public deleteUser(userId:string): Observable<any>{
    const params = new HttpParams()
    .set('userId', userId);
    return this.httpClient.delete<any>(this.PATH_OF_API + '/deleteUser',{params});
  }

  public updateUserDetails(editedUser:any):Observable<any>{
    return this.httpClient.put<any>(this.PATH_OF_API+'/updateUserDetails',editedUser);
  }
  
  public searchUsersByName(searchTerm:string): Observable<any>{
    const params = new HttpParams()
    .set('searchTerm', searchTerm);
    return this.httpClient.get<any>(this.PATH_OF_API + '/searchUsersByName',{params});
  }
}
