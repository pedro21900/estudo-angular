import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavBarPageComponent} from "./nav-bar-page.component";
import {NavBarListComponent} from "./component/nav-bar/nav-bar-list.component";


const routes: Routes = [{
  path: '', component: NavBarPageComponent, children: [
    {path: '', component: NavBarListComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarPageRoutingModule {
}
