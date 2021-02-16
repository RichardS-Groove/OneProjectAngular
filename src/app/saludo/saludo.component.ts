import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  //template: '<h1>Componente Saludo</h1>', /**Se usa mas cuando el html a ingresar es pequeño */
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje: string;
  identiParrafo: string;
  identifInput: string;

  constructor() {
    this.mensaje = 'Un saludos a todos';
    this.identiParrafo = 'parrafoPrincipal';
    this.identifInput = 'text';

    setTimeout(() => {
      this.mensaje = 'Otro mensaje diferente';
      this.identiParrafo = 'main';

    }, 3000)
  }

  ngOnInit(): void {}

  mostrarSaludo(): string {
    return 'Saludo desde el método';
  }

}
