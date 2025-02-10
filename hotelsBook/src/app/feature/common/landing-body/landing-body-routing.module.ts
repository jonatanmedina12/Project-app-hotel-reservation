import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyLandingUseComponent } from './components/body-landing-use/body-landing-use.component';

export const LANDING_ROUTES: Routes = [{

    path: 'landing',
    component: BodyLandingUseComponent,


}];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class LandingBodyRoutingModule { }
