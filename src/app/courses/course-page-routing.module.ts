import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursePageComponent} from "./course-page.component";
import {CourseListComponent} from "./courses-list/course-list.component";
import {CouseDetailComponent} from "./courses-detail/couse-detail.component";


const routes: Routes = [
  {
    path: '', redirectTo: 'course', pathMatch: 'full'
  },
  {

    path: 'course', component: CoursePageComponent, children: [
      {path: '', component: CourseListComponent},
      {path: '', component: CouseDetailComponent},
      {
        path:'course/info/:id',component:CouseDetailComponent
      }

    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursePageRoutingModule {
}
