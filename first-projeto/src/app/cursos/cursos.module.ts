import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent // Para exportar o module para outro module e importar o CursosModule no AppModule
  ],
  providers: [ // Serviços fornecedores
    CursosService
  ]
})
export class CursosModule { }
