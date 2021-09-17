import {NgModule} from '@angular/core';
import {CoursePageComponent} from "./course-page.component";

import {CourseListComponent} from "./courses-list/course-list.component";
import {CoursePageRoutingModule} from "./course-page-routing.module";
import {CommonModule} from "@angular/common";
import {CouseDetailComponent} from "./courses-detail/couse-detail.component";

@NgModule({
  declarations: [
    CoursePageComponent,
    CouseDetailComponent,
    CourseListComponent
  ],
  imports: [
    CoursePageRoutingModule,
    CommonModule,
  ],
  bootstrap: [CoursePageComponent]
})
export class CoursePageModule {
}
