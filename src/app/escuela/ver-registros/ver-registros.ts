import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-ver-registros',
  templateUrl: './ver-registros.html'
})
export class VerRegistros implements OnInit {
  formulario!: FormGroup; // Usamos el mismo nombre que en alumnos

  ventas: any[] = [];
  indiceEdicion: number = -1;
  mensajeError: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cargarVentas();
    
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(''),
      tarjetaCineco: new FormControl(''),
      boletas: new FormControl(''),
    });
  }

  cargarVentas(): void {
    const datos = localStorage.getItem('ventasCine');
    if (datos) {
      this.ventas = JSON.parse(datos);
    }
  }

  editarVenta(index: number): void {
    const venta = this.ventas[index];
    this.formulario.patchValue({
      nombre: venta.nombre,
      compradores: venta.compradores,
      tarjetaCineco: venta.tarjetaCineco,
      boletas: venta.boletas
    });
    
    this.indiceEdicion = index;
    this.mensajeError = '';
  }

  guardarEdicion(): void {
    this.mensajeError = '';
    
    let nombre = this.formulario.value.nombre;
    let compradores = this.formulario.value.compradores;
    let boletas = this.formulario.value.boletas;
    let tarjeta = this.formulario.value.tarjetaCineco;

    if (boletas > compradores * 7) {
      this.mensajeError = 'Error: No se pueden comprar más de 7 boletas por persona.';
      return;
    }

    let total = boletas * 12;

    if (boletas > 5) {
      total = total - (total * 0.15);
    } else if (boletas >= 3) {
      total = total - (total * 0.10);
    }

    if (tarjeta == 'si') {
      total = total - (total * 0.10);
    }

    if (this.indiceEdicion !== -1) {
      this.ventas[this.indiceEdicion] = {
        nombre: nombre,
        compradores: compradores,
        tarjetaCineco: tarjeta,
        boletas: boletas,
        total: total
      };
    }

    localStorage.setItem('ventasCine', JSON.stringify(this.ventas));
    
    this.limpiarCampos();
  }

  eliminarVenta(index: number): void {
    this.ventas.splice(index, 1);
    localStorage.setItem(
      'ventasCine',
      JSON.stringify(this.ventas)
    );
  }
  
  limpiarCampos(): void {
    this.formulario.reset({
      nombre: "",
      compradores: "",
      tarjetaCineco: "",
      boletas: ""
    });
    this.indiceEdicion = -1;
    this.mensajeError = '';
  } 

  volver(): void {
    this.router.navigate(['/escuela/cinepolis']);
  }
}