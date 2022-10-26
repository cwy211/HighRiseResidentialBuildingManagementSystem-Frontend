import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AccountService } from 'src/app/_services/account/account.service';
import { OwnershipService } from 'src/app/_services/ownership/ownership.service';
import { UnitService } from 'src/app/_services/unit/unit.service';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ownership',
  templateUrl: './create-ownership.component.html',
  styleUrls: ['./create-ownership.component.css']
})
export class CreateOwnershipComponent implements OnInit {

  validateForm!: FormGroup;
  unitIdList: string[] = [];
  today = new Date();
  userId: string = '';
  password: string = '';
  passwordVisible = false;

  constructor(
    private accountService: AccountService,
    private unitService: UnitService,
    private ownershipService: OwnershipService,
    private modal: NzModalService,
    private message: NzMessageService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllUnitId();
    this.validateForm = this.fb.group({
      userPassword: [null, [Validators.required]],
      userFirstName: [null, [Validators.required]],
      userLastName: [null, [Validators.required]],
      userGender: ['M', [Validators.required]],
      userContact: [null, [Validators.pattern("[0-9 ]{10}"), Validators.required]],
      userUnit: [null, [Validators.required]],
    });
  }

  submitForm(ownershipForm: any): void {
    if (this.validateForm.valid) {
      this.showConfirmRegisterNewOwnership(ownershipForm);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  getAllUnitId() {
    this.unitService.getAllVacantUnitId().subscribe({
      next: (response) => {
        this.unitIdList = response;
      },
      error: (error) => console.error(error)
    });
  }

  showConfirmRegisterNewOwnership(ownershipForm: NgForm): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm creation of new ownership?</b>',
      nzOnOk: () => this.registerNewOwnerDetails(ownershipForm)
    });
  }

  registerNewOwnerDetails(ownershipForm: NgForm) {

    this.accountService.registerNewOwnerDetails(ownershipForm.value).subscribe({
      next: (response) => {
        this.userId = response.userId;
      },
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Resident account created successfully.");
        this.registerNewOwnership(ownershipForm);
      }
    });
  }

  registerNewOwnership(ownershipForm: NgForm) {
    this.password = ownershipForm.value.userPassword;
    const newOwnership = {
      owner: this.userId,
      ownedUnit: ownershipForm.value.userUnit,
      startDate: moment(this.today).format("YYYY-MM-DD")
    }

    this.ownershipService.addOwnership(newOwnership).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Ownership added successfully.");
        const credentials = {
          userId: this.userId,
          userPassword: this.password
        }
        this.router.navigate(['/viewNewAccount'], { queryParams: { userId: JSON.stringify(credentials) } });
      }
    });

    this.validateForm.reset();
  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

}
