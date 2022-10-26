import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account/account.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  term: string = "Name:";
  userDetailsList: [] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getNotInactiveUserDetails();
  }

  getNotInactiveUserDetails() {
    this.accountService.getNotInactiveUserDetails().subscribe({
      next: (response) => this.userDetailsList = response,
      error: (error) => console.error(error)
    });
  }

  searchUser(searchTerm: string) {
    this.accountService.searchUsersByName(searchTerm).subscribe({
      next: (response) => this.userDetailsList = response,
      error: (error) => console.error(error)
    });
  }
}
