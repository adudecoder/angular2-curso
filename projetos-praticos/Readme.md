```
{{ title }}

<br>
<hr>
<p>Component sendo atualizado pelo Two Way Data-Binding!</p>
{{ name }}
<hr>
<br>

<p>One Way Data-Binding, não atualiza o component, apenas exibe ele!</p>
<input [ngModel]="name" name="name">

<hr>

<p>Two Way Data-Binding, atualiza o component, exibe e altera o component!</p>
<input [(ngModel)]="name" name="name">
```