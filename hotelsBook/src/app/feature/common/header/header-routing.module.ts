import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeaderComponent } from './components/top-header/top-header.component';

export const TOP_HEADER :Routes=[

  {
    path: 'header',
    component: TopHeaderComponent

  }
]
@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
