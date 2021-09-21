import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Error404Compoennt} from "./@core/layout/component/erro-404/error-404.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/courses/course-page.module').then(m => m.CoursePageModule),
  },
  {
    path: '**', component: Error404Compoennt
  }];

@NgModule({
  declarations:[Error404Compoennt],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
