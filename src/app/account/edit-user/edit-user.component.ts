import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditUserDto } from 'src/app/_models/EditUserDto';
import { AccountService } from 'src/app/_services/account/account.service';
import { UnitService } from 'src/app/_services/unit/unit.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editedUser: EditUserDto = new EditUserDto();
  userId: string = '';
  unitIdList: string[] = [];

  constructor(
    private accountService: AccountService,
    private unitService: UnitService,
    private activatedRoute: ActivatedRoute,
    private modal: NzModalService,
    private message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params['userId'];
    });
    this.getUserByUserId();
    this.getAllOwnedUnitId();
  }

  getAllOwnedUnitId() {
    this.unitService.getAllOwnedUnitId().subscribe({
      next: (response) => {
        this.unitIdList = response;
      },
      error: (error) => console.error(error)
    });
  }

  getUserByUserId() {
    this.accountService.getUserByUserId(this.userId).subscribe({
      next: (response) => {
        this.editedUser = response;
        this.editedUser.userUnit = response.userUnit.unitId;
      },
      error: (error) => console.error(error)
    });
  }

 

  showConfirmEditUserDetails(): void {
    this.modal.confirm({
      nzTitle: '<i>Update Confirmation</i>',
      nzContent: '<b>Confirm update of account details?</b>',
      nzOnOk: () => this.editUserDetails()
    });
  }

  editUserDetails() {

    console.log(this.editedUser);
    this.accountService.updateUserDetails(this.editedUser).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Resident account updated successfully. You will redirected back in 3 seconds");
        setTimeout(() => this.router.navigate(['/viewUser']), 3000);
      }
    });

  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

  isOwner(): boolean {
    if (this.editedUser.userStatus === 'Owner') {
      return true;
    }
    return false;
  }

  isNotOwner(): boolean {
    if (this.editedUser.userStatus === 'Owner') {
      return false;
    }
    return true;
  }


}
