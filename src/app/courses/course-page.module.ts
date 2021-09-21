import {NgModule} from '@angular/core';
import {CoursePageComponent} from "./course-page.component";
import {CourseListComponent} from "./courses-list/course-list.component";
import {CoursePageRoutingModule} from "./course-page-routing.module";
import {CommonModule} from "@angular/common";
import {CouseDetailComponent} from "./courses-detail/couse-detail.component";
import {FormsModule} from "@angular/forms";
import {ReplacePipe} from "../@shared/pipe/replace-pipe";
import {DxDataGridModule} from "devextreme-angular";
import {DxiColumnModule, DxoEditingModule} from "devextreme-angular/ui/nested";
import {StarComponent} from "../@shared/star/star.component";

@NgModule({
  declarations: [
    CoursePageComponent,
    CourseListComponent,
    StarComponent,
    CouseDetailComponent,
    ReplacePipe
  ],
  imports: [
    CoursePageRoutingModule,
    CommonModule,
    FormsModule,
    DxDataGridModule,
    DxiColumnModule,
    DxoEditingModule,
  ],
  bootstrap: [CoursePageComponent]
})
export class CoursePageModule {
}
