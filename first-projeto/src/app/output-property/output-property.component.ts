import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: any = 0;

  // Emitir um evento para o componente pai
  // Quando a gente quer expor um evento ou um valor, a gente utiliza o decoretor chamado @Output
  @Output() mudouValor = new EventEmitter();

  // @ViewChild() que também é outro decoretor
  @ViewChild('campoInput', {static: false}) campoValorInput!: ElementRef;

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    // this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
    // Toda vez que clicar no botão de +, vamos emitir o evento, podendo ser até um OBJETO
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    // this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
