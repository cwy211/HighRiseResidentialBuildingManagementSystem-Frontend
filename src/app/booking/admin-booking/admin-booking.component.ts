import { Component, OnInit } from '@angular/core';
import { Facility } from 'src/app/_models/Facility';
import { FacilityService } from 'src/app/_services/facility/facility.service';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})
export class AdminBookingComponent implements OnInit {

  facilityList:Facility[]=[];
  default:Facility=new Facility();
  bookingList:[]=[];
  showEmpty:boolean=false;
  constructor(private facilityService:FacilityService) { }

  ngOnInit(): void {
    this.getAllFacility();
  }

  getAllFacility(){
    this.facilityService.getAllBookingFacility().subscribe({
      next:(response)=>{
        this.facilityList=response;
        this.default=this.facilityList[0];
      },
      error:(error)=>console.error(error)
    }
    );
  }

  getFacilityBookingByFacilityDate(searchParams:any){
    this.facilityService.getFacilityBookingByFacilityDate(searchParams).subscribe({
      next:(response)=>{
        this.bookingList=response;
        if(this.bookingList.length==0){
          this.showEmpty=true;
        }else{
          this.showEmpty=false;
        }
      },
      error:(error)=>console.error(error)
    }
    );
  }

  noBooking():boolean{
    if(this.bookingList.length==0){
      return true;
    }
    return false;
  }

}
