import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CursosService } from './cursos/cursos.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { Projeto } from './projeto/projeto.component';
import { Projeto2Component } from './projeto2/projeto2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component'; // Importando a class Projeto para a Declarations do Module saber de onde vem a class

@NgModule({
  declarations: [
    AppComponent,
    Projeto,
    Projeto2Component,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent // Declarando a class Projeto
  ],
  imports: [
    BrowserModule,
    CursosModule,
    TooltipModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent],
})
export class AppModule { }
