import { FichaRouter } from './ficha/ficha.router';
import { ListaComponent } from './ficha/lista/lista.component';
import { FormularioComponent } from './ficha/formulario/formulario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: FormularioComponent},
  {path: 'lista', component: ListaComponent},

  ...FichaRouter

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
