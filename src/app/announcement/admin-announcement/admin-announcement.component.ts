import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/_models/Announcement';
import { AnnouncementService } from 'src/app/_services/announcement/announcement.service';

@Component({
  selector: 'app-admin-announcement',
  templateUrl: './admin-announcement.component.html',
  styleUrls: ['./admin-announcement.component.css']
})
export class AdminAnnouncementComponent implements OnInit {

  announcementList: Announcement[] = [];
  activeAnnouncementList: Announcement[] = [];
  inactiveAnnouncementList: Announcement[] = [];


  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.getAllAnnouncement();
  }

  getAllAnnouncement() {
    this.announcementService.getAllAnnouncement().subscribe({
      next: (response: any) => {
        this.announcementList = response;
      },
      error: (error) => console.error(error),
      complete: () => this.categoriseAnnouncement()
    });
  }

  categoriseAnnouncement() {
    for (let i = 0; i < this.announcementList.length; i++) {
      switch (this.announcementList[i].status) {
        case "Active":
          this.activeAnnouncementList.push(this.announcementList[i]);
          break;
        case "Inactive":
          this.inactiveAnnouncementList.push(this.announcementList[i]);
          break;

      }
    }
  }
}


