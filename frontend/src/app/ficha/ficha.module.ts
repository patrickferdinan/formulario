import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FichasService } from './shared/fichas.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ], declarations: [
    FormularioComponent,
    ListaComponent
  ],
  providers: [
    FichasService
  ]
})
export class FichaModule {
}
