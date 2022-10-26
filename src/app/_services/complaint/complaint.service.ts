import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  PATH_OF_API = 'http://localhost:8080/complaint';

  constructor(private httpclient: HttpClient) { }

  public createComplaint(newComplaint:any):Observable<any>{
    return this.httpclient.post<any>(this.PATH_OF_API+'/createComplaint',newComplaint);
  }

  public getComplaintByUserName(): Observable<any>{
    return this.httpclient.get<any>(this.PATH_OF_API + '/getComplaintByUserName');
  }

  public getComplaintById(id:number): Observable<any>{
    const params = new HttpParams()
    .set('id', id);
    return this.httpclient.get<any>(this.PATH_OF_API + '/getComplaintById',{params});
  }

  public getAllComplaint(): Observable<any>{
    return this.httpclient.get<any>(this.PATH_OF_API + '/getAllComplaint');
  }

  public getAllComplaintBySentimentAsc(): Observable<any>{
    return this.httpclient.get<any>(this.PATH_OF_API + '/getAllComplaintBySentimentAsc');
  }

  public getAllComplaintMaintenancePriorityAsc(): Observable<any>{
    return this.httpclient.get<any>(this.PATH_OF_API + '/getAllComplaintMaintenancePriorityAsc');
  }

  public handleComplaint(handledComplaint:any):Observable<any>{
    return this.httpclient.put<any>(this.PATH_OF_API+'/handleComplaint',handledComplaint);
  }

  public processComplaint(processedComplaint:any):Observable<any>{
    return this.httpclient.put<any>(this.PATH_OF_API+'/processComplaint',processedComplaint);
  }

  public getAllComplaintCategory(): Observable<any>{
    return this.httpclient.get<any>(this.PATH_OF_API + '/getAllComplaintCategory');
  }

  public updateComplaintCategoryRank(sequence:string[]):Observable<any>{
    return this.httpclient.put<any>(this.PATH_OF_API+'/updateComplaintCategoryRank',sequence);
  }

  public addComplaintCategory(newComplaintCategory:any):Observable<any>{
    return this.httpclient.post<any>(this.PATH_OF_API+'/addComplaintCategory',newComplaintCategory);
  }

  public getKeywordByComplaintCategory(category:string): Observable<any>{
    const params = new HttpParams()
    .set('category', category);
    return this.httpclient.get<any>(this.PATH_OF_API + '/getKeywordByComplaintCategory',{params});
  }

  public addComplaintKeyword(newKeyword:any): Observable<any>{
    return this.httpclient.post<any>(this.PATH_OF_API + '/addComplaintKeyword',newKeyword);
  }

  public deleteKeyword(keyword:string): Observable<any>{
    const params = new HttpParams()
    .set('keyword', keyword)
    return this.httpclient.delete<any>(this.PATH_OF_API + '/deleteKeyword',{params});
  }
}
