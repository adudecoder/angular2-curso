import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  // Template Inline com array de estilos, e nós podemos declarar cada estilo utilizando os templates de string do ECM script 2015 que é através da crase. OBS usar esse método apenas para um estilo, caso tenha varios CSS, use o styleUrls
  styles: [
    `
      .highlight {
      background-color: red;
      font-weight: bold;
      color: white;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.io';
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/id/237/200/300';
  valorAtual: string = '';
  valorSalvo: any = '';
  isMouseOver: boolean = false;
  nome: any = 'abc';
  pessoa: any = {

    nome: 'def',
    idade: 20

  }
  nomeDoCurso: string = 'Angular';
  valorInicial: any = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado!');
  }

  // evento.target é do tipo HTMLInputElement
  onKeyUp(evento: KeyboardEvent) {
    // console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value; // Mostrar no template
  }

  // Para salvar o valor digitado no input
  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  // Ao passar o nouse em cima de algum elemento
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  updateValor(evento: any) {
    this.nome = evento;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}