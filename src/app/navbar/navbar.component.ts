import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthorizationService } from '../_services/user/user-authorization.service';
import { UserService } from '../_services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private userAuthService: UserAuthorizationService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  public logout() {
    this.userAuthService.clearSession();
    this.router.navigate(['/home']);
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public isRoleMatch(allowedRoles: any) {
    return this.userService.roleMatch(allowedRoles);
  }

}
