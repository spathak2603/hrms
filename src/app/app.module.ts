import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponentComponent } from './shell/shell-component/shell-component.component';
import { SideBarComponent } from './container/side-bar/side-bar.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ContentContainerComponent } from './container/content-container/content-container.component';
import { HeaderComponent } from './container/header/header.component'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ContentPostComponent } from './content/content-post/content-post.component';
import { AttendanceComponent } from './content/attendance/attendance.component';
import { CalendarComponent } from './content/calendar/calendar.component';
import { ContentCardComponent } from './content/content-card/content-card.component';
import { DatePipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FeedbackCardComponent } from './content/feedback-card/feedback-card.component';
import { SideCardComponent } from './content/side-card/side-card.component';
import { NotificationComponent } from './content/notification/notification.component';
import { StoreComponent } from './content/store/store.component';
@NgModule({
  declarations: [
    AppComponent,
    ShellComponentComponent,
    SideBarComponent,
    ContentContainerComponent,
    HeaderComponent,
    ContentPostComponent,
    AttendanceComponent,
    CalendarComponent,
    ContentCardComponent,
    FeedbackCardComponent,
    SideCardComponent,
    NotificationComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
  ],
  providers: [DatePipe, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
