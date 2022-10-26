import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  array = ["../../../assets/images/condo.jpg", "../../../assets/images/room.jpg", "../../../assets/images/security.jpg", "../../../assets/images/facilities.png"];

}
