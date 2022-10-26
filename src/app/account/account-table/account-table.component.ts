import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { User } from 'src/app/_models/User';
import { AccountService } from 'src/app/_services/account/account.service';

@Component({
  selector: 'app-account-table',
  templateUrl: './account-table.component.html',
  styleUrls: ['./account-table.component.css']
})
export class AccountTableComponent implements OnInit {

  @Input() userDetailsList: User[] = [];


  constructor(
    private accountService: AccountService,
    private modal: NzModalService,
    private message: NzMessageService,
  ) { }

  ngOnInit(): void {
  }

  deleteUser(userId: string) {
    this.accountService.deleteUser(userId).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Resident account deleted successfully");
        setTimeout(() => window.location.reload(), 2000);
      }
    });
  }

  showConfirmDeleteUser(userId: string, userStatus: string): void {
    if (userStatus !== 'Owner') {
      this.modal.confirm({
        nzTitle: '<i>Delete Confirmation</i>',
        nzContent: '<b>Confirm deletion of resident account?</b>',
        nzOnOk: () => this.deleteUser(userId)
      });
    } else {
      this.modal.error({
        nzTitle: '<i>Deletion Unallowed</i>',
        nzContent: '<b>You cannot delete an owner account</b>'
      });
    }

  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

}
