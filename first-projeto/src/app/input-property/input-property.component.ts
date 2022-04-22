import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // A nivel de curiosidade também podemos declarar os inputs como meta-dado do decoretor component. Mas de preferencia a usar o decoretor sempre na frente do nome da variavel assim: @Input('nome') nomeCurso: string = '';
  // inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {

  // Chamando a variavel nomeDoCurso usando decoretor @input(), também faz parte do pacote do Angular Core e tem que ser importado, e com isso nós conseguimos expor uma propriedade chamada nome para o selector 'app-input-property'
  @Input('nome') nomeCurso: string = '';
  // Podemos usar internamente a variavel com o nome nomeCurso, e externamente expor ela como nome

  constructor() { }

  ngOnInit(): void {
  }

}
