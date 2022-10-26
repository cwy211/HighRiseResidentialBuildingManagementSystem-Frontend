import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UnitService } from 'src/app/_services/unit/unit.service';


@Component({
  selector: 'app-register-unit',
  templateUrl: './register-unit.component.html',
  styleUrls: ['./register-unit.component.css']
})
export class RegisterUnitComponent implements OnInit {

  validateForm!: FormGroup;

  unitId: string = "";
  unitBlock: string = "";
  unitFloor: string = "";


  constructor(
    private unitService: UnitService,
    private modal: NzModalService,
    private message: NzMessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      unitId: [null, [Validators.required]],
      unitBlock: [null, [Validators.required]],
      unitFloor: [null, [Validators.required]]
    });
  }

  submitForm(unitForm: any): void {
    if (this.validateForm.valid) {
      this.showConfirmRegisterUnit(unitForm);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  showConfirmRegisterUnit(unitForm: NgForm): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm registration of new unit?</b>',
      nzOnOk: () => this.checkUnitExist(unitForm)
    });
  }




  registerNewUnit(unitForm: NgForm) {

    this.unitService.registerUnit(unitForm.value).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Unit added successfully.");
      }
    });
    this.validateForm.reset();
  }

  checkUnitExist(unitForm: NgForm) {
    this.unitService.checkUnitExist(unitForm.value.unitId).subscribe({
      next: (response) => {
        if (response !== true) {
          this.registerNewUnit(unitForm);
        } else {
          this.modal.error({
            nzTitle: '<i>Duplicated Unit Number</i>',
            nzContent: '<b>The unit already exists</b>'
          });
        }
      },
      error: (error) => console.error(error)
    });
  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }
}
