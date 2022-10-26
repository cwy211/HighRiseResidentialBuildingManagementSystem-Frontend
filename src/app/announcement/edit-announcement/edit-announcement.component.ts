import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Announcement } from 'src/app/_models/Announcement';
import { AnnouncementService } from 'src/app/_services/announcement/announcement.service';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.css']
})
export class EditAnnouncementComponent implements OnInit {

  id: number = 0;
  announcement: Announcement = new Announcement();
  isActive!: any;

  constructor(
    private announcementService: AnnouncementService,
    private activatedRoute: ActivatedRoute,
    private modal: NzModalService,
    private message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['success'];
    });
    this.getAnnouncement();
  }

  editAnnouncement() {
    this.isActive == true ? this.announcement.status = "Active" : this.announcement.status = "Inactive";

    this.announcementService.updateAnnouncement(this.announcement).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Announcement updated successfully. You will redirected back to the view announcements page in 3 seconds");
        setTimeout(() => this.router.navigate(['/adminAnnouncement']), 3000);
      }
    });
  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

  showConfirmEditAnnouncement(): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm update of announcement?</b>',
      nzOnOk: () => this.editAnnouncement()
    });
  }


  getAnnouncement() {
    this.announcementService.getAnnouncement(this.id).subscribe({
      next: (response) => {
        this.announcement = response;
        this.announcement.status == "Active" ? this.isActive = true : this.isActive = false;
      },
      error: (error) => console.error(error)
    });
  }

  checkClicked(val: any) {
    this.isActive = val;
  }

}
