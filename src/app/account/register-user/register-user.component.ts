import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AccountService } from 'src/app/_services/account/account.service';
import { UnitService } from 'src/app/_services/unit/unit.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  validateForm!: FormGroup;
  unitIdList: string[] = [];
  userId: string = '';
  password: string = '';
  passwordVisible = false;

  constructor(
    private accountService: AccountService,
    private unitService: UnitService,
    private modal: NzModalService,
    private message: NzMessageService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllOwnedUnitId();
    this.validateForm = this.fb.group({
      userPassword: [null, [Validators.required]],
      userFirstName: [null, [Validators.required]],
      userLastName: [null, [Validators.required]],
      userGender: ['M', [Validators.required]],
      userContact: [null, [Validators.pattern("[0-9 ]{10}"), Validators.required]],
      userUnit: [null, [Validators.required]],
    });
  }

  submitForm(registerUserForm: any): void {
    if (this.validateForm.valid) {
      this.showConfirmRegisterNewUser(registerUserForm);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  getAllOwnedUnitId() {
    this.unitService.getAllOwnedUnitId().subscribe({
      next: (response) => {
        this.unitIdList = response;
      },
      error: (error) => console.error(error)
    });
  }

  showConfirmRegisterNewUser(registerUserForm: any): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm creation of new resident account?</b>',
      nzOnOk: () => this.registerNewUserDetails(registerUserForm)
    });
  }

  registerNewUserDetails(registerUserForm: any) {
    this.password = registerUserForm.value.userPassword;
    this.accountService.registerNewUserDetails(registerUserForm.value).subscribe({
      next: (response) => {
        this.userId = response.userId;
      },
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Resident account created successfully.");
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
