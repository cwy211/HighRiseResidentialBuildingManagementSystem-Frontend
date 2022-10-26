import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnauthoriseComponent } from './unauthorise/unauthorise.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_authorization/auth.guard';
import { AuthInterceptor } from './_authorization/auth.interceptor';
import { UserService } from './_services/user/user.service';
import { RegisterUserComponent } from './account/register-user/register-user.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { ViewUserComponent } from './account/view-user/view-user.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { AccountTableComponent } from './account/account-table/account-table.component';
import { EditUserComponent } from './account/edit-user/edit-user.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SearchBarComponent } from './common/search-bar/search-bar.component';
import { RegisterUnitComponent } from './unit/register-unit/register-unit.component';
import { ViewUnitComponent } from './unit/view-unit/view-unit.component';
import { UnitTableComponent } from './unit/unit-table/unit-table.component';
import { ShowUnitComponent } from './unit/show-unit/show-unit.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CreateAnnouncementComponent } from './announcement/create-announcement/create-announcement.component';
import { AnnouncementCardComponent } from './announcement/announcement-card/announcement-card.component';
import { EditAnnouncementComponent } from './announcement/edit-announcement/edit-announcement.component';
import { AdminAnnouncementComponent } from './announcement/admin-announcement/admin-announcement.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { UserAnnouncementComponent } from './announcement/user-announcement/user-announcement.component';
import { CreateHelpdeskTicketComponent } from './helpdesk-ticket/create-helpdesk-ticket/create-helpdesk-ticket.component';
import { UserHelpdeskTicketComponent } from './helpdesk-ticket/user-helpdesk-ticket/user-helpdesk-ticket.component';
import { TicketCardComponent } from './helpdesk-ticket/ticket-card/ticket-card.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TicketDetailsComponent } from './helpdesk-ticket/ticket-details/ticket-details.component';
import { HandleTicketComponent } from './helpdesk-ticket/handle-ticket/handle-ticket.component';
import { AdminHelpdeskTicketComponent } from './helpdesk-ticket/admin-helpdesk-ticket/admin-helpdesk-ticket.component';
import { AddFacilityComponent } from './facility/add-facility/add-facility.component';
import { AdminFacilityComponent } from './facility/admin-facility/admin-facility.component';
import { FacilityCardComponent } from './facility/facility-card/facility-card.component';
import { CreateScheduleComponent } from './maintenance/create-schedule/create-schedule.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { MaintenanceCardComponent } from './maintenance/maintenance-card/maintenance-card.component';
import { MaintenanceScheduleComponent } from './maintenance/maintenance-schedule/maintenance-schedule.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { MaintenanceDetailsComponent } from './maintenance/maintenance-details/maintenance-details.component';
import { SingleMaintenanceComponent } from './maintenance/single-maintenance/single-maintenance.component';
import { RecurringMaintenanceComponent } from './maintenance/recurring-maintenance/recurring-maintenance.component';
import { FacilityDateSelectorComponent } from './booking/facility-date-selector/facility-date-selector.component';
import { BookFacilityComponent } from './booking/book-facility/book-facility.component';
import { TimeslotsComponent } from './booking/timeslots/timeslots.component';
import { BookingCardComponent } from './booking/booking-card/booking-card.component';
import { UpcomingBookingCardComponent } from './booking/upcoming-booking-card/upcoming-booking-card.component';
import { UserBookingComponent } from './booking/user-booking/user-booking.component';
import { AdminBookingComponent } from './booking/admin-booking/admin-booking.component';
import { MaintenanceHistoryComponent } from './facility/maintenance-history/maintenance-history.component';
import { CreateOwnershipComponent } from './ownership/create-ownership/create-ownership.component';
import { AddFundUsageComponent } from './maintenance-fund/add-fund-usage/add-fund-usage.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FundUsageTableComponent } from './maintenance-fund/fund-usage-table/fund-usage-table.component';
import { MaintenanceFundUsageComponent } from './maintenance-fund/maintenance-fund-usage/maintenance-fund-usage.component';
import { UsageMonthSelectorComponent } from './maintenance-fund/usage-month-selector/usage-month-selector.component';
import { ComplaintCategoryComponent } from './complaint/complaint-category/complaint-category.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ComplaintCategoryKeywordComponent } from './complaint/complaint-category-keyword/complaint-category-keyword.component';
import { AddComplaintKeywordComponent } from './complaint/add-complaint-keyword/add-complaint-keyword.component';
import { CreateComplaintComponent } from './complaint/create-complaint/create-complaint.component';
import { UserComplaintComponent } from './complaint/user-complaint/user-complaint.component';
import { ComplaintCardComponent } from './complaint/complaint-card/complaint-card.component';
import { HandleComplaintComponent } from './complaint/handle-complaint/handle-complaint.component';
import { ComplaintDetailsComponent } from './complaint/complaint-details/complaint-details.component';
import { AdminComplaintComponent } from './complaint/admin-complaint/admin-complaint.component';
import { ComplaintFilterComponent } from './complaint/complaint-filter/complaint-filter.component';
import { FeeCardComponent } from './maintenance-fee-payment/fee-card/fee-card.component';
import { PendingFeeComponent } from './maintenance-fee-payment/pending-fee/pending-fee.component';
import { FeeDetailsComponent } from './maintenance-fee-payment/fee-details/fee-details.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AdminOwnershipComponent } from './ownership/admin-ownership/admin-ownership.component';
import { OwnershipTableComponent } from './ownership/ownership-table/ownership-table.component';
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { EmptyBookingComponent } from './booking/empty-booking/empty-booking.component';
import { CarouselComponent } from './home-page/carousel/carousel.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ViewNewAccountComponent } from './account/view-new-account/view-new-account.component';
import { ViewMaintenanceHistoryComponent } from './facility/view-maintenance-history/view-maintenance-history.component';
import { EmptyScheduleComponent } from './maintenance/empty-schedule/empty-schedule.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { ViewFundDetailsComponent } from './maintenance-fund/view-fund-details/view-fund-details.component';
import { EditUnitComponent } from './unit/edit-unit/edit-unit.component';
import { FacilityTableComponent } from './facility/facility-table/facility-table.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    LoginComponent,
    NavbarComponent,
    UnauthoriseComponent,
    RegisterUserComponent,
    ViewUserComponent,
    AccountTableComponent,
    EditUserComponent,
    SearchBarComponent,
    RegisterUnitComponent,
    ViewUnitComponent,
    UnitTableComponent,
    ShowUnitComponent,
    CreateAnnouncementComponent,
    AnnouncementCardComponent,
    EditAnnouncementComponent,
    AdminAnnouncementComponent,
    UserAnnouncementComponent,
    CreateHelpdeskTicketComponent,
    UserHelpdeskTicketComponent,
    TicketCardComponent,
    TicketDetailsComponent,
    HandleTicketComponent,
    AdminHelpdeskTicketComponent,
    AddFacilityComponent,
    AdminFacilityComponent,
    FacilityCardComponent,
    CreateScheduleComponent,
    MaintenanceCardComponent,
    MaintenanceScheduleComponent,
    MaintenanceDetailsComponent,
    SingleMaintenanceComponent,
    RecurringMaintenanceComponent,
    FacilityDateSelectorComponent,
    BookFacilityComponent,
    TimeslotsComponent,
    BookingCardComponent,
    UpcomingBookingCardComponent,
    UserBookingComponent,
    AdminBookingComponent,
    MaintenanceHistoryComponent,
    CreateOwnershipComponent,
    AddFundUsageComponent,
    FundUsageTableComponent,
    MaintenanceFundUsageComponent,
    UsageMonthSelectorComponent,
    ComplaintCategoryComponent,
    ComplaintCategoryKeywordComponent,
    AddComplaintKeywordComponent,
    CreateComplaintComponent,
    UserComplaintComponent,
    ComplaintCardComponent,
    HandleComplaintComponent,
    ComplaintDetailsComponent,
    AdminComplaintComponent,
    ComplaintFilterComponent,
    FeeCardComponent,
    PendingFeeComponent,
    FeeDetailsComponent,
    AdminOwnershipComponent,
    OwnershipTableComponent,
    EditFacilityComponent,
    FooterComponent,
    EmptyBookingComponent,
    CarouselComponent,
    ViewNewAccountComponent,
    ViewMaintenanceHistoryComponent,
    EmptyScheduleComponent,
    ViewFundDetailsComponent,
    EditUnitComponent,
    FacilityTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMenuModule,
    RouterModule,
    NzSelectModule,
    NzRadioModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzGridModule,
    NzMessageModule,
    NzTabsModule,
    NzDropDownModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzCardModule,
    NzInputNumberModule,
    DragDropModule,
    NzDescriptionsModule,
    NzFormModule,
    NzEmptyModule,
    ReactiveFormsModule,
    NzCarouselModule,
    NzAvatarModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
    UserService,
    { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
