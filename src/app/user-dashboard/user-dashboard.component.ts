import { Component, OnInit } from '@angular/core';
import { EditUserDto } from '../_models/EditUserDto';
import { User } from '../_models/User';
import { AccountService } from '../_services/account/account.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: EditUserDto = new EditUserDto();
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getOwnUserProfile();
  }

  getOwnUserProfile() {
    this.accountService.getOwnUserProfile().subscribe({
      next: (response) => {
        this.user = response;
        response.userGender == 'M' ? this.user.userGender = 'Male' : this.user.userGender = 'Female';
        this.user.userUnit = response.userUnit.unitId;
      },
      error: (error) => console.error(error)
    });
  }

}
