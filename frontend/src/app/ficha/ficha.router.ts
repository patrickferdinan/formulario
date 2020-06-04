import {Routes} from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';


export const FichaRouter: Routes = [
    {
        path: 'novo',
        redirectTo: 'ficha/formulario'
    },
    {
        path: 'ficha/novo',
        component: FormularioComponent

    },
    {
        path: 'ficha/lista',
        component: ListaComponent

    }

];
