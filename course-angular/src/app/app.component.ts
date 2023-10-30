import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // nombre = 'juan'
  // textoPlaceholdfer = 'Escriba algo aquí'
  // deshabilitado = true
  // img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

  // constructor() {
  //   setInterval( ()=> this.deshabilitado = false ,3000);
  // }

  // getSuma(numero1: number, numero2: number) {
  //   return numero1 + numero2;
  // }


  // texto = 'Esto es un video sobre event Binding'

  // cambiarTexto(): void {
  //   this.texto = 'En el proximo video vamos a ver Two way data-Binding'
  // }

  // texto = ' ';

  listEstudiantes: any[] = [
    { nombre: 'Thomas Gonzales', estado: 'Promocionado'},
    { nombre: 'Crstian Gonzales', estado: 'Regular'},
    { nombre: 'Patricia Funes', estado: 'Libre'},
    { nombre: 'Sebas Gonzales', estado: 'Regular'},
    { nombre: 'Marta Perez', estado: 'Promocionado'},
    { nombre: 'Nicolas Gomez', estado: 'Libre'},
  ]

  mostrar = true

  toogle(): void {
    this.mostrar = !this.mostrar
  }
}
