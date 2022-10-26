import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthorizationService } from '../_services/user/user-authorization.service';
import { UserService } from '../_services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordVisible = false;
  message: string = '';
  validateForm!: FormGroup;

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthorizationService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userId: [null, [Validators.required]],
      userPassword: [null, [Validators.required]]
    });
  }

  submitForm(loginForm: any): void {
    if (this.validateForm.valid) {
      this.login(loginForm);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  login(loginForm: any) {
    this.userService.login(loginForm.value).subscribe({
      next: (response: any) => {
        this.userAuthService.setRole(response.user.userRole.roleName);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.userRole.roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      error: (error) => {
        console.error(error);
        if (error.status === 401) {
          this.message = "Invalid Credentials! Please Try Again.";
        }
      },
      complete: () => console.info('complete')
    }
    );



  }


}
