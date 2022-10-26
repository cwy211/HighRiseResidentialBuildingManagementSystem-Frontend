import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-fee-card',
  templateUrl: './fee-card.component.html',
  styleUrls: ['./fee-card.component.css']
})
export class FeeCardComponent implements OnInit {

  @Input() fee: any;
  @Output() onMakePayment: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {

  }



  viewFeeDetails() {
    this.router.navigate(['/feeDetails'], { queryParams: { fee: JSON.stringify(this.fee) } });


  }








  public isRoleMatch(allowedRoles: any) {
    return this.userService.roleMatch(allowedRoles);
  }

  isNotZero(): boolean {
    let feeYearMonth = moment(this.fee.yearMonth).format("YYYY-MM");
    let current = moment().format("YYYY-MM");
    if (this.fee.total === 0) {
      return false;
    }
    if (feeYearMonth == current) {
      return false;
    }
    return true;
  }


}
