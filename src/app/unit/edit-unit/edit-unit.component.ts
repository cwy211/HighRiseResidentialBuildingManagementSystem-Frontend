import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Unit } from 'src/app/_models/Unit';
import { UnitService } from 'src/app/_services/unit/unit.service';

@Component({
  selector: 'app-edit-unit',
  templateUrl: './edit-unit.component.html',
  styleUrls: ['./edit-unit.component.css']
})
export class EditUnitComponent implements OnInit {

  unit: Unit = new Unit();
  unitId: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private unitService: UnitService,
    private message: NzMessageService,
    private modal: NzModalService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.unitId = params['unitId'];
    });
    this.getUnitByUnitId();
  }

  getUnitByUnitId() {
    this.unitService.getUnitByUnitId(this.unitId).subscribe({
      next: (response) => {
        this.unit = response;
      },
      error: (error) => console.error(error)
    });
  }

  showConfirmEditUnitDetails(): void {
    this.modal.confirm({
      nzTitle: '<i>Update Confirmation</i>',
      nzContent: '<b>Confirm update of account details?</b>',
      nzOnOk: () => this.editUserDetails()
    });
  }

  editUserDetails() {

    this.unitService.updateUnit(this.unit).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Unit updated successfully. You will redirected back in 3 seconds");
        setTimeout(() => this.router.navigate(['/viewUnit']), 3000);
      }
    });

  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }


}
