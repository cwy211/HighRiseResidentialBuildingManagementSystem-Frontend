import { Component, OnInit } from '@angular/core';
import { Ownership } from 'src/app/_models/Ownership';
import { OwnershipService } from 'src/app/_services/ownership/ownership.service';

@Component({
  selector: 'app-admin-ownership',
  templateUrl: './admin-ownership.component.html',
  styleUrls: ['./admin-ownership.component.css']
})
export class AdminOwnershipComponent implements OnInit {

  ownershipList: Ownership[] = [];
  constructor(private ownershipService: OwnershipService) { }

  ngOnInit(): void {
    this.getAllOwnership();
  }

  getAllOwnership() {
    this.ownershipService.getAllOwnership().subscribe({
      next: (response) => this.ownershipList = response,
      error: (error) => console.error(error)
    });
  }

}
