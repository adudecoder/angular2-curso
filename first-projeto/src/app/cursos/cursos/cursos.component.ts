import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: any; // Qualquer tipo de variavel sendo string ou numero
  cursos: string[]; // Aray só de string

  constructor(private CursosService: CursosService) { // Passando param para chamar a injeção de dependencia podendo passar um modificador de acesso publico ou privado
    this.nomePortal = 'http://loiane.training';

    /*for (let i=0; i<this.cursos.length; i++) {
      let curso = this.cursos[i];
    }*/

    // var servico = new CursosService();

    // Com a variavel declarada acima no Constructor já poderemos ter a informação e Precisamos informar o Angular a fornecer a Class para gente passando um atributo Providers no Module.ts
    this.cursos = this.CursosService.getCursos();

  }

  ngOnInit(): void {
  }

}
