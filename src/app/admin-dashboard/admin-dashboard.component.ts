import { Component, OnInit } from '@angular/core';
import { Admin } from '../_models/Admin';
import { AccountService } from '../_services/account/account.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  user: Admin = new Admin();
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getOwnAdminProfile();
  }

  getOwnAdminProfile() {
    this.accountService.getOwnAdminProfile().subscribe({
      next: (response) => {
        this.user = response;
        response.adminGender == 'M' ? this.user.adminGender = 'Male' : this.user.adminGender = 'Female';
      },
      error: (error) => console.error(error)
    });
  }

}
