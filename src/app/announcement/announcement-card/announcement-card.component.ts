import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from 'src/app/_models/Announcement';
import { UserService } from 'src/app/_services/user/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-announcement-card',
  templateUrl: './announcement-card.component.html',
  styleUrls: ['./announcement-card.component.css']
})
export class AnnouncementCardComponent implements OnInit {

  @Input() announcement: Announcement = new Announcement();
  date: string = '';
  time: string = '';
  announcementStatus = { active: true };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getDateTime();
  }

  public isRoleMatch(allowedRoles: any) {
    return this.userService.roleMatch(allowedRoles);
  }

  getDateTime() {
    this.date = moment(this.announcement.createDate).format("YYYY-MM-DD");
    this.time = moment(this.announcement.createDate).format("hh:mm A");
  }

}
