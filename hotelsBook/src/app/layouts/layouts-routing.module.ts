import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutInitialComponent } from './components/main-layout-initial/main-layout-initial.component';

 export const LAYOUTS_ROUTES : Routes = [{
   path: '',
   component: MainLayoutInitialComponent,
 }];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
