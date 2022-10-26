import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/_services/announcement/announcement.service';

@Component({
  selector: 'app-user-announcement',
  templateUrl: './user-announcement.component.html',
  styleUrls: ['./user-announcement.component.css']
})
export class UserAnnouncementComponent implements OnInit {

  announcementList: [] = [];

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.getActiveAnnouncement();
  }

  getActiveAnnouncement() {
    this.announcementService.getActiveAnnouncement().subscribe({
      next: (response: any) => {
        this.announcementList = response;
      },
      error: (error) => console.error(error)
    });
  }

}
