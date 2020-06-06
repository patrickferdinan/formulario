import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FichaRouter } from './ficha/ficha.router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/ficha/novo',
    pathMatch: 'full'
  },
  ...FichaRouter

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
