import {NgModule} from '@angular/core';
import {CoursePageComponent} from "./course-page.component";
import {CourseListComponent} from "./courses-list/course-list.component";
import {CoursePageRoutingModule} from "./course-page-routing.module";
import {CommonModule} from "@angular/common";
import {CouseDetailComponent} from "./courses-detail/couse-detail.component";
import {FormsModule} from "@angular/forms";
import {ReplacePipe} from "../pipe/replace-pipe";

@NgModule({
  declarations: [
    CoursePageComponent,
    CouseDetailComponent,
    CourseListComponent,
    ReplacePipe
  ],
  imports: [
    CoursePageRoutingModule,
    CommonModule,
    FormsModule,
  ],
  bootstrap: [CoursePageComponent]
})
export class CoursePageModule {
}
