import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentContainerComponent } from './container/content-container/content-container.component';
import { AttendanceComponent } from './content/attendance/attendance.component';
import { CalendarComponent} from './content/calendar/calendar.component'
import { ContentCardComponent } from './content/content-card/content-card.component';
import { FeedbackCardComponent } from './content/feedback-card/feedback-card.component';
import { SideCardComponent } from './content/side-card/side-card.component';
const routes: Routes = [{
  path: '',
  pathMatch:'full',
  redirectTo:'home'
},
{
  path:'home',
  component: ContentContainerComponent
},
{
  path:'attendance',
  component: AttendanceComponent
},
{
  path:'leave-management',
  component: CalendarComponent
},
{
  path:'initiatives',
  component: ContentCardComponent
},
{
  path:'feedback',
  component: FeedbackCardComponent
},
{
  path: 'quick-catchup',
  component: SideCardComponent
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
