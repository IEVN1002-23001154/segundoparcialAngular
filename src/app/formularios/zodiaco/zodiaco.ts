import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-zodiaco',
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})
export class Zodiaco {
  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';
  dia: string = '';
  mes: string = '';
  anio: string = '';
  sexo: string = '';
  edadcalculada: number = 0;
  signo: string = '';
  img: string = '';


  imprimir(): void {
    //para calcular edad
    this.edadcalculada = 2026 - parseInt(this.anio);
    //para hacer la cuenta del año
    let numanio = parseInt(this.anio);
    let residuo = numanio % 12;
    
    switch (residuo) {
  case 0:
    this.signo = 'Mono';
    this.img = '/imagenes/Mono.png';
    break;
    case 1:
    this.signo = 'Gallo';
    this.img = './imagenes/Gallo.png';
    break;
    case 2:
    this.signo = 'Perro';
    this.img = '/imagenes/Perro.png';
    break;
    case 3:
    this.signo = 'Cerdo';
    this.img = '/imagenes/Cerdo.png';
    break;
    case 4:
    this.signo = 'Rata';
    this.img = '/imagenes/Rata.png';
    break;
    case 5:
    this.signo = 'Buey';
    this.img = '/imagenes/Buey.png';
    break;
    case 6:
    this.signo = 'Tigre';
    this.img = '/imagenes/Tigre.png';
    break;
    case 7:
    this.signo = 'Conejo';
    this.img = '/imagenes/Conejo.png';
    break;
    case 8:
    this.signo = 'Dragón';
    this.img = '/imagenes/Dragon.png';
    break;
    case 9:
    this.signo = 'Serpiente';
    this.img = '/imagenes/Serpiente.png';
    break;
    case 10:
    this.signo = 'Caballo';
    this.img = '/imagenes/Caballo.png';
    break;
    case 11:
    this.signo = 'Cabra';
    this.img = '/imagenes/Cabra.png';
    break;
}
  }
}