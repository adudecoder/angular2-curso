import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngfor',
  templateUrl: './diretivas-ngfor.component.html',
  styleUrls: ['./diretivas-ngfor.component.scss']
})
export class DiretivasNgforComponent implements OnInit {

  cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
    }
  }

}
