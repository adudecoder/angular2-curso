import { Injectable } from '@angular/core';

@Injectable({ // Injeção de dependencia
  providedIn: 'root'
})
export class CursosService {

  constructor() { }
 
  getCursos() {
    return ['Java', 'Ext JS', 'Angular']; // Retornando o array com os valores para os Components
  }

}
