import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { HeaderComponent } from './components/header/header.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ProfileComponent } from './views/profile/profile.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TimeTrackingComponent } from './components/time-tracking/time-tracking.component';
import { ClockComponent } from './components/clock/clock.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    SideBarComponent,
    TaskDetailsComponent,
    HeaderComponent,
    CalendarComponent,
    ProfileComponent,
    DashboardComponent,
    TimeTrackingComponent,
    ClockComponent,
    CardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
