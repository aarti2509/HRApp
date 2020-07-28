import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AlertComponent} from './alert/alert.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'alertmsg',component:AlertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
