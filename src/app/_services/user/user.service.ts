import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthorizationService } from './user-authorization.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = 'http://localhost:8080';

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );

  constructor(
    private httpClient: HttpClient,
    private userAuthService: UserAuthorizationService
    ) { }

  public login(loginData:NgForm){
    return this.httpClient.post(this.PATH_OF_API + "/login", loginData, {headers: this.requestHeader});
  }

  public roleMatch(allowedRoles:any): boolean {
    let isMatch = false;
    const userRole: any = this.userAuthService.getRole();

    if (userRole != null && userRole) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRole === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      
    }
    return isMatch;
  }
}
