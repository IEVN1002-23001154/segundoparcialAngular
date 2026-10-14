import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis implements OnInit {
  formulario!: FormGroup;

  valorPagar: number = 0;
  mensajeError: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(''),
      tarjetaCineco: new FormControl(''),
      boletas: new FormControl(''),
    });
  }

  procesar(): void {
    this.mensajeError = '';
    this.valorPagar = 0;

    let compradores = this.formulario.value.compradores;
    let boletas = this.formulario.value.boletas;
    let tarjeta = this.formulario.value.tarjetaCineco;
    let nombre = this.formulario.value.nombre;

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

    this.valorPagar = total;

    // Guardado en Local Storage
    let nuevaVenta = {
      nombre: nombre,
      compradores: compradores,
      tarjetaCineco: tarjeta,
      boletas: boletas,
      total: total
    };

    let ventasGuardadas = localStorage.getItem('ventasCine');
    let arregloVentas = ventasGuardadas ? JSON.parse(ventasGuardadas) : [];
    
    arregloVentas.push(nuevaVenta);
    localStorage.setItem('ventasCine', JSON.stringify(arregloVentas));
    
    // Opcional: limpiar formulario después de procesar
    this.formulario.reset({
      nombre: '',
      compradores: '',
      tarjetaCineco: '',
      boletas: '',
    });
  }

  verRegistros(): void {
    this.router.navigate(['/escuela/ver-registros']);
  }
}