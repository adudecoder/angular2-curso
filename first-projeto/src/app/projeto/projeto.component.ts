import { Component } from "@angular/core";

@Component({
    selector: 'meu-primeiro-component', // Nome da tag HTML
    template: `
        <p>Meu primeiro component com Angular!</p>
    `// Template HTML
})

export class Projeto {} // Exportar a class para outros arquivos
// Precisa ser declarada no declarations do module.ts