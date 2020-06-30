import { ListaComponent } from './lista/lista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROTAS: Routes = [
  {path: '', component: MenuComponent},
  {path: 'ficha', component: FormularioComponent},
  {path: 'registro', component: ListaComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);
