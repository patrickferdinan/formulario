import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './ficha/formulario/formulario.component';
import { FichasService } from './ficha/shared/fichas.service';
import { ListaComponent } from './ficha/lista/lista.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FichasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
