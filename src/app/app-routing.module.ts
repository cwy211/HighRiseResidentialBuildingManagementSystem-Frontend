import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './account/edit-user/edit-user.component';
import { RegisterUserComponent } from './account/register-user/register-user.component';
import { ViewUserComponent } from './account/view-user/view-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAnnouncementComponent } from './announcement/admin-announcement/admin-announcement.component';
import { CreateAnnouncementComponent } from './announcement/create-announcement/create-announcement.component';
import { EditAnnouncementComponent } from './announcement/edit-announcement/edit-announcement.component';
import { UserAnnouncementComponent } from './announcement/user-announcement/user-announcement.component';
import { AdminBookingComponent } from './booking/admin-booking/admin-booking.component';
import { BookFacilityComponent } from './booking/book-facility/book-facility.component';
import { UserBookingComponent } from './booking/user-booking/user-booking.component';
import { ComplaintCategoryComponent } from './complaint/complaint-category/complaint-category.component';
import { AddFacilityComponent } from './facility/add-facility/add-facility.component';
import { AdminFacilityComponent } from './facility/admin-facility/admin-facility.component';
import { MaintenanceHistoryComponent } from './facility/maintenance-history/maintenance-history.component';
import { AdminHelpdeskTicketComponent } from './helpdesk-ticket/admin-helpdesk-ticket/admin-helpdesk-ticket.component';
import { CreateHelpdeskTicketComponent } from './helpdesk-ticket/create-helpdesk-ticket/create-helpdesk-ticket.component';
import { HandleTicketComponent } from './helpdesk-ticket/handle-ticket/handle-ticket.component';
import { TicketDetailsComponent } from './helpdesk-ticket/ticket-details/ticket-details.component';
import { UserHelpdeskTicketComponent } from './helpdesk-ticket/user-helpdesk-ticket/user-helpdesk-ticket.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AddFundUsageComponent } from './maintenance-fund/add-fund-usage/add-fund-usage.component';
import { MaintenanceFundUsageComponent } from './maintenance-fund/maintenance-fund-usage/maintenance-fund-usage.component';
import { CreateScheduleComponent } from './maintenance/create-schedule/create-schedule.component';
import { MaintenanceDetailsComponent } from './maintenance/maintenance-details/maintenance-details.component';
import { MaintenanceScheduleComponent } from './maintenance/maintenance-schedule/maintenance-schedule.component';
import { CreateOwnershipComponent } from './ownership/create-ownership/create-ownership.component';
import { UnauthoriseComponent } from './unauthorise/unauthorise.component';
import { RegisterUnitComponent } from './unit/register-unit/register-unit.component';
import { ShowUnitComponent } from './unit/show-unit/show-unit.component';
import { ViewUnitComponent } from './unit/view-unit/view-unit.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from './_authorization/auth.guard';
import { ComplaintCategoryKeywordComponent } from './complaint/complaint-category-keyword/complaint-category-keyword.component';
import { CreateComplaintComponent } from './complaint/create-complaint/create-complaint.component';
import { UserComplaintComponent } from './complaint/user-complaint/user-complaint.component';
import { ComplaintDetailsComponent } from './complaint/complaint-details/complaint-details.component';
import { HandleComplaintComponent } from './complaint/handle-complaint/handle-complaint.component';
import { AdminComplaintComponent } from './complaint/admin-complaint/admin-complaint.component';
import { PendingFeeComponent } from './maintenance-fee-payment/pending-fee/pending-fee.component';
import { FeeDetailsComponent } from './maintenance-fee-payment/fee-details/fee-details.component';
import { AdminOwnershipComponent } from './ownership/admin-ownership/admin-ownership.component';
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';
import { ViewNewAccountComponent } from './account/view-new-account/view-new-account.component';
import { ViewMaintenanceHistoryComponent } from './facility/view-maintenance-history/view-maintenance-history.component';
import { ViewFundDetailsComponent } from './maintenance-fund/view-fund-details/view-fund-details.component';
import { EditUnitComponent } from './unit/edit-unit/edit-unit.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserDashboardComponent, canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'login', component: LoginComponent},
  { path: 'unauthorise', component: UnauthoriseComponent},
  { path: 'registerUser', component: RegisterUserComponent},
  { path: 'viewUser', component: ViewUserComponent},
  { path: 'editUser', component: EditUserComponent},
  { path: 'registerUnit', component: RegisterUnitComponent},
  { path: 'viewUnit', component: ViewUnitComponent},
  { path: 'showUnit', component: ShowUnitComponent},
  { path: 'createAnnouncement', component: CreateAnnouncementComponent},
  { path: 'adminAnnouncement', component: AdminAnnouncementComponent},
  { path: 'editAnnouncement', component: EditAnnouncementComponent},
  { path: 'userAnnouncement', component: UserAnnouncementComponent},
  { path: 'createHelpdeskTicket', component: CreateHelpdeskTicketComponent},
  { path: 'viewHelpdeskTicket', component: UserHelpdeskTicketComponent},
  { path: 'handleTicket', component: HandleTicketComponent },
  { path: 'ticketDetails', component: TicketDetailsComponent },
  { path: 'adminHelpdeskTicket', component: AdminHelpdeskTicketComponent },
  { path: 'addFacility', component: AddFacilityComponent },
  { path: 'adminFacility', component: AdminFacilityComponent },
  { path: 'createSchedule', component: CreateScheduleComponent },
  { path: 'maintenanceSchedule', component: MaintenanceScheduleComponent },
  { path: 'maintenanceDetails', component: MaintenanceDetailsComponent },
  { path: 'bookFacility', component: BookFacilityComponent },
  { path: 'userBooking', component: UserBookingComponent },
  { path: 'adminBooking', component: AdminBookingComponent },
  { path: 'maintenanceHistory', component: MaintenanceHistoryComponent },
  { path: 'createOwnership', component: CreateOwnershipComponent },
  { path: 'addFundUsage', component: AddFundUsageComponent },
  { path: 'maintenanceFundUsage', component: MaintenanceFundUsageComponent },
  { path: 'complaintCategory', component: ComplaintCategoryComponent },
  { path: 'complaintCategoryKeyword', component: ComplaintCategoryKeywordComponent },
  { path: 'createComplaint', component: CreateComplaintComponent },
  { path: 'userComplaint', component: UserComplaintComponent },
  { path: 'complaintDetails', component: ComplaintDetailsComponent },
  { path: 'handleComplaint', component: HandleComplaintComponent },
  { path: 'adminComplaint', component: AdminComplaintComponent },
  { path: 'pendingFee', component: PendingFeeComponent },
  { path: 'feeDetails', component: FeeDetailsComponent },
  { path: 'adminOwnership', component: AdminOwnershipComponent },
  { path: 'editFacility', component: EditFacilityComponent },
  { path: 'viewNewAccount', component: ViewNewAccountComponent },
  { path: 'viewMaintenanceHistory', component: ViewMaintenanceHistoryComponent },
  { path: 'viewFundDetails', component: ViewFundDetailsComponent },
  { path: 'editUnit', component: EditUnitComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
