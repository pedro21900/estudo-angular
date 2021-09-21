import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NavBarPageComponent} from "./nav-bar-page.component";
import {NavBarPageRoutingModule} from "./nav-bar-page-routing.module";
import {NavBarListComponent} from "./component/nav-bar/nav-bar-list.component";

@NgModule({
  declarations: [
    NavBarPageComponent,
    NavBarListComponent
  ],
  imports: [
    NavBarPageRoutingModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    NavBarListComponent
  ],
  bootstrap: [NavBarPageComponent]
})
export class NavBarPageModule {
}
