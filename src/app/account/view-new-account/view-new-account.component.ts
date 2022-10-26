import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUserDto } from 'src/app/_models/EditUserDto';
import { User } from 'src/app/_models/User';
import { AccountService } from 'src/app/_services/account/account.service';

@Component({
  selector: 'app-view-new-account',
  templateUrl: './view-new-account.component.html',
  styleUrls: ['./view-new-account.component.css']
})
export class ViewNewAccountComponent implements OnInit {

  gender:string='';
  editedUser:EditUserDto=new EditUserDto();
  userId:string='';
  password:string='';
  user:User=new User();
  constructor(
    private accountService:AccountService,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.user = JSON.parse(params['userId']);
      this.userId=this.user.userId;
      this.password=this.user.userPassword;
    });
    this.getUserByUserId();
  }

  getUserByUserId(){
    this.accountService.getUserByUserId(this.userId).subscribe({
      next:(response)=>{
        this.editedUser=response;
        this.editedUser.userUnit=response.userUnit.unitId;
        if(this.editedUser.userGender=='M'){
          this.editedUser.userGender='Male';
        }else{
          this.editedUser.userGender='Female';
        }
      },
      error:(error)=>console.error(error)
    });
  }
}
