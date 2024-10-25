import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // Calculo de raices en una ecuacion cuadratica
  a: number = 0;
  b: number = 0;
  c: number = 0;
  raices: string = '';
  constructor() {}

  // Funcion para calcular las raices de la ecuacion cuadratica
  calcularRaices(): void {
    if (this.a == 0 && this.b == 0 && this.c == 0) {
      window.alert('Ingrese valores diferentes de 0');
      return;
    }
    // Formula general: x = (-b ± √(b² - 4ac)) / 2a
    console.log('Calculando raices...');

    // Calculo del discriminante para determinar la cantidad de raices
    let x1: number = 0;
    let x2: number = 0;
    let discriminante = Math.pow(this.b, 2) - 4 * this.a * this.c;

    if (discriminante > 0) {
      x1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      x2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);

      // Redondear los valores a 2 decimales
      x1 = Math.round(x1 * 100) / 100;
      x2 = Math.round(x2 * 100) / 100

      this.raices = `x1 = ${x1}, x2 = ${x2}`;
    } else if (discriminante == 0) {
      x1 = -this.b / (2 * this.a);
      x1 = Math.round(x1 * 100) / 100

      this.raices = `x = ${x1}`;
    } else {
      this.raices = 'No hay raices en el conjunto de los nuemros reales';
    }
  }
}
